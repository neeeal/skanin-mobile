import { useState, useRef } from "react";
// import { StyleSheet, Text, View } from "react-native";
import { 
  Text, 
  View, 
  Image,
  TouchableOpacity, 
  Dimensions
} from "react-native";
import { useFontContext } from '../../ftx';
import { useSession } from '../../ctx';
import { Iconify } from 'react-native-iconify';
import Lock from '../../assets/svg/Lock.svg';
import Email from '../../assets/svg/Email.svg';

export default function Profile() {
  const { signOut } = useSession();
  const [userDetails, setUserDetails] = useState({
    name: "Mathilda Brown",
    position: "Agronomist",
    email: "test@test.com",
    contact: "+63 912 346 6789",
    password: "xxxx"
  });
  const { fontsLoaded } = useFontContext();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const imageWidth = parseInt(Dimensions.get('window').width / 4);
  
  return (
    <View className="flex h-full w-full justify-center align-center bg-white px-8 pt-8">

      <View className="flex min-h-[10%] items-start  ">
      <Text style={{fontFamily: 'Montserrat_700Bold'}} className="text-black text-3xl ">My Profile</Text>
      </View>

      <View className="flex min-h-[30%] justify-center items-center  ">
        <View className="border-4 border-[#D7DFC9] flex rounded-full">
          <Image source={require("../../assets/images/User.png")} style={{ width: imageWidth, height: imageWidth }} ></Image>
          <TouchableOpacity className="border-2 border-[#D7DFC9] absolute -right-2 -bottom-2 rounded-full p-0.5 bg-white">
          <Iconify icon="entypo:pencil" size={24} color={"#000000"} />
          </TouchableOpacity>
        </View>
        <View className="  flex pt-4 items-center">
          <Text style={{fontFamily: 'Montserrat_500Medium'}} className="text-black text-3xl">{userDetails.name}</Text>
          <Text style={{fontFamily: 'Montserrat_300Light'}} className="text-black text-base">{userDetails.position}</Text>
        </View>
      </View>

      <View className="flex min-h-[45%] items-center bg-[#D9D9D9] border  rounded-xl">
        <View className="flex-row border-b border-[#808080] w-full justify-between p-4 bg-[#D7DFC9] items rounded-t-xl ">

          <View className="align-right   flex-row ">
            <Email width="28" height="28"/>
            <Text style={{fontFamily: 'Montserrat_400Regular'}} className="font-base pl-4 text-black self-center">{userDetails.email}</Text>
          </View>
          <TouchableOpacity className="align-right   flex justify-center">
            <Iconify icon="formkit:arrowright" size={16} color={"#086608"} />
          </TouchableOpacity>
        </View>

        <View className="flex-row border border-[#808080] w-full justify-between p-4 bg-[#D7DFC9] ">
          <View className="align-right   flex-row">
            <Iconify icon="mdi:user-box" size={32} color={"#086608"} />
            <Text style={{fontFamily: 'Montserrat_400Regular'}} className="font-base pl-3 text-black self-center">{userDetails.contact}</Text>
          </View>
          <TouchableOpacity className="align-right   flex justify-center">
            <Iconify icon="formkit:arrowright" size={16} color={"#086608"} />
          </TouchableOpacity>
        </View>

        <View className="flex-row border border-[#808080] w-full justify-between p-4 bg-[#D7DFC9] ">
          <View className="align-right   flex-row">
            <Lock width="32" height="32"/>
            <Text style={{fontFamily: 'Montserrat_400Regular'}} className="font-base pl-3 text-black self-center">********</Text>
          </View>
          <TouchableOpacity className="align-right   flex justify-center">
            <Iconify icon="formkit:arrowright" size={16} color={"#086608"} />
          </TouchableOpacity>
        </View>
          
        <View className="border border-[#808080] w-full p-4 bg-[#D7DFC9] " >
          <TouchableOpacity onPress={() => signOut()} className="flex-row max-w-[40%]" >
            <Iconify icon="majesticons:logout" size={32} color={"#086608"} />
            <Text style={{fontFamily: 'Montserrat_400Regular'}} className="font-base pl-3 text-black self-center">Logout</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}

// export default function Profile() {
//   const { signOut } = useSession();
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text
//         onPress={() => {

//           signOut();
//         }}>
//         Sign Out
//       </Text>
//     </View>
//   );
// }
