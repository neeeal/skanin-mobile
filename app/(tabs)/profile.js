import { useState, useEffect } from "react";
// import { StyleSheet, Text, View } from "react-native";
import { 
  Text, 
  View, 
  Image,
  TouchableOpacity, 
  Dimensions,
  Alert
} from "react-native";
import { useSession } from '../../ctx';
import { Iconify } from 'react-native-iconify';
import Lock from '../../assets/svg/Lock.svg';
import Email from '../../assets/svg/Email.svg';
import * as ImagePicker from "expo-image-picker";
import EditFieldModal from "../../components/modal/editEntry.js"
import { router } from 'expo-router';
import make_request from '../../helpers/url_server';
import { LOGOUT, UPDATE_ONE_USER, GET_ONE_USER } from '../../helpers/urls';
import * as FileSystem from 'expo-file-system';

export default function Profile() {
  const { signOut, session } = useSession();
  const [userDetails, setUserDetails] = useState({
    name: null,
    position: null,
    email: null,
    contact: null,
    password: null,
  });
  const [isModalVisible, setModalVisible] = useState(false);
  const [fieldToEdit, setFieldToEdit] = useState(null);

  const handleOpenModal = (fieldName) => {
    setFieldToEdit(fieldToEdit=>fieldName);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setFieldToEdit(null);
  };

  const handleSaveField = (newValue, fieldName) => {
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [fieldName]: newValue,
    }));
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const imageWidth = parseInt(Dimensions.get('window').width / 3);

  const logoutLogic = async () => {
    let response;
    console.log("SESSION HERE", session)
    console.log({
      body: {
        token: session.token,
        _id: session.userId
      }
    })
    try {
      response = await make_request({
        relative_url: LOGOUT,
        body: {
          token: session.token,
          _id: session.userId
        },
        method: 'POST'
      });
      
      console.log('Logout successful:', response);;
    } catch (err) {
      if (err.message.includes("Invalid session. Please log in again.")) {
        Alert.alert('Already Logged Out', "Redirecting to Home");
        return {status:200}
      }
    }
    return {status:200}
  }

  const onPressLogout = async () => {
    result = await logoutLogic()
    // Alert.alert('Logout', JSON.stringify(session));
    signOut();
    console.log("clicked", session);
    // if (!session.token || !session.userId){
    router.replace("/login")
    Alert.alert("Development indicator", "Success logout"); // TODO: Remove
    console.log("after", session);
    // }
  }

  useEffect(()=>{
    const fetchData = async () => {

      console.log("SESSION HERE", session);
      if (!session || !session.token || !session.userId) {
        Alert.alert("Error", "Session is invalid. Please logout and log in again.");
        return { status: 400 };
      }

      let response;
      try {
        response = await make_request({
          relative_url: GET_ONE_USER+`/${session.userId}`,
          HEADERS: {
            "Authorization": `Bearer ${session.token}`
          },
          method: 'GET'
        });
        setUserDetails(response.data);
        setSelectedImage(response.data.image);
          } catch (err) {
        console.log("Error fetching user data:", err);
      }
      console.log("response", response);
    }

    const result = fetchData();
  },
  []);

  const updateData = async (payload) => {

    console.log("SESSION HERE", session);
    if (!session || !session.token || !session.userId) {
      Alert.alert("Error", "Session is invalid. Please logout and log in again.");
      return { status: 400 };
    }

    let response;
    try {
      response = await make_request({
        relative_url: UPDATE_ONE_USER,
        HEADERS: {
          "Authorization": `Bearer ${session.token}`
        },
        body: {
          field: payload.field,
          value: payload.value,
          _id: session.userId
        },
        method: 'PUT'
      });
      Alert.alert('Update Successful', JSON.stringify(response.data)); // TODO: Remove
      setModalVisible(false);
    } catch (err) {
      console.log("Error updating user data:", err);
    }
    console.log("response", response);

    return response.data;
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const { uri } = result.assets[0];
      
      // Convert to base64
      const base64String = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
      setSelectedImage(base64String);


      const payload = {
        field: "image",
        value: base64String,
      }

      console.log(payload);

      result = await updateData(payload)
      Alert.alert("Development indicator", "Success change profile"); // TODO: Remove
    }
  };
    
  return (
    <View className="flex h-full w-full justify-center align-center bg-white px-8 pt-8">

      <View className="flex min-h-[10%] items-start  ">
      <Text style={{fontFamily: 'Montserrat_700Bold'}} className="text-black text-3xl ">My Profile</Text>
      </View>

      <View className="flex min-h-[30%] justify-center items-center  ">
        <View className="border-4 border-[#D7DFC9] flex rounded-full " style={{ width: imageWidth, height: imageWidth}}>
          {
            !selectedImage ? 
            <Image source={require("../../assets/images/mdi--user.png")} style={{flex:1, width: undefined, height: undefined, borderRadius: 100}}></Image>
            : <Image source={{uri: `data:image/png;base64,${selectedImage}`}} style={{flex:1, width: undefined, height: undefined, borderRadius: 100}}></Image>
        }
          <TouchableOpacity className="border-2 border-[#D7DFC9] absolute -right-2 -bottom-2 rounded-full p-0.5 bg-white" onPress={pickImage}>
          <Iconify icon="entypo:pencil" size={24} color={"#000000"} />
          </TouchableOpacity>
        </View>
        <View className="  flex pt-4 items-center">
          <Text style={{fontFamily: 'Montserrat_500Medium'}} className="text-black text-3xl">{userDetails.name}</Text>
          <Text style={{fontFamily: 'Montserrat_300Light'}} className="text-black text-base">{userDetails.position}</Text>
        </View>
      </View>

      <View className="flex min-h-[45%] items-center bg-[#D9D9D9] rounded-xl">
        
      <View className="flex-row border-b border-[#808080] w-full justify-between p-4 bg-[#D7DFC9] items rounded-t-xl">
        <View className="align-right flex-row flex-1">
          <Email width="28" height="28" />
          <Text
            style={{ fontFamily: 'Montserrat_400Regular', overflow: 'hidden' }}
            className="font-base pl-4 text-black self-center max-w-[95%]"
            numberOfLines={1}
            ellipsizeMode="tail" 
          >
            {userDetails.email}
          </Text>
        </View>
        <TouchableOpacity
        className="align-right flex justify-center"
        onPress={() => handleOpenModal('email')}
      >
        <Iconify icon="formkit:arrowright" size={16} color={"#086608"} />
      </TouchableOpacity>
      </View>

        <View className="flex-row border-b border-[#808080] w-full justify-between p-4 bg-[#D7DFC9] ">
          <View className="align-right   flex-row">
            <Iconify icon="mdi:user-box" size={32} color={"#086608"} />
            <Text style={{fontFamily: 'Montserrat_400Regular'}} className="font-base pl-3 text-black self-center">{userDetails.contact}</Text>
          </View>
          <TouchableOpacity className="align-right   flex justify-center" onPress={() => handleOpenModal('contact')}>
            <Iconify icon="formkit:arrowright" size={16} color={"#086608"} />
          </TouchableOpacity>
        </View>

        <View className="flex-row border-b border-[#808080] w-full justify-between p-4 bg-[#D7DFC9] ">
          <View className="align-right   flex-row">
            <Lock width="32" height="32"/>
            <Text style={{fontFamily: 'Montserrat_400Regular'}} className="font-base pl-3 text-black self-center">********</Text>
          </View>
          <TouchableOpacity className="align-right   flex justify-center" onPress={() => handleOpenModal('password')}> 
            <Iconify icon="formkit:arrowright" size={16} color={"#086608"} />
          </TouchableOpacity>
        </View>
          
        <View className="border-b border-[#808080] w-full p-4 bg-[#D7DFC9] " >
          <TouchableOpacity onPress={onPressLogout} className="flex-row max-w-[40%]" >
            <Iconify icon="majesticons:logout" size={32} color={"#086608"} />
            <Text style={{fontFamily: 'Montserrat_400Regular'}} className="font-base pl-3 text-black self-center">Logout</Text>
          </TouchableOpacity>
        </View>

      </View>
      { fieldToEdit && 
        <EditFieldModal
          isVisible={isModalVisible}
          onClose={handleCloseModal}
          onSave={handleSaveField}
          initialValue={userDetails[fieldToEdit]}
          fieldName={fieldToEdit}
          session={session}
        /> 
      }
    </View>
  );
}