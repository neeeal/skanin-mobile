import { useState, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ActivityIndicator,
  Alert
} from "react-native";
import { useSession } from '../../ctx';
import { router } from "expo-router";
import { Iconify } from "react-native-iconify";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import make_request from '../../helpers/url_server';
import { SCAN_IMAGE } from '../../helpers/urls';
import * as FileSystem from 'expo-file-system';

export default function App() {
  const { session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [image, setImage] = useState(null);
  const [expand, setExpand] = useState(null);
  const [libraryPermission, requestPermissionlibrary] =
    MediaLibrary.usePermissions();
  const [findings, setFindings] = useState(null);

  if (!permission || !libraryPermission) {
    return <View />;
  }

  function useGetPermission(){
    requestPermission(()=>useCameraPermissions());
    requestPermissionlibrary(()=>MediaLibrary.usePermissions());
  }

  if (!permission.granted || !libraryPermission.granted) {
    return (
      <View className="bg-gray-800  flex flex-1">
        <TouchableOpacity
          className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start absolute"
          onPress={goBack}
        >
          <Iconify
            icon="ion:chevron-back-circle-sharp"
            size={54}
            color={"#FFFFFF"}
          />
        </TouchableOpacity>
        <View className="flex flex-1 justify-center items-center">
          <Text className="text-white">
            
            We need your permission to show the camera
          </Text>
          <TouchableOpacity className="w-[50%] border border-black mt-2 p-1 rounded-xl bg-[#049B04]" onPress={useGetPermission}>
            
            <Text className="text-white text-center"> Grant Permission </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const recommendationLogic = async (image) => {
    console.log("SESSION HERE", session);
    if (!session || !session.token || !session.userId) {
      Alert.alert("Error", "Session is invalid. Please logout and log in again.");
      return { status: 400 };
    }
  
    let response;
    try {
      response = await make_request({
        relative_url: SCAN_IMAGE,
        body: { image: image, _id: session.userId },
        HEADERS: { 'Authorization': `Bearer ${session.token}` },
        method: 'POST'
      });
      console.log('Scan successful:', response);
    } catch (err) {
      console.error("Error during scanning:", err);
      Alert.alert("Error", "Scanning and getting recommendation failed.");
      return { status: 400 };
    }
    response.data.recommendation = response.data.recommendation.replace(/\\n/g, '\n\n');
    // console.log(newdata);
    // response.data.recommendation = response.data.recommendation

    // console.log("HERE NOW", );
    return { status: 200, data: response.data };
  };
  
  const captureImage = async () => {
    setIsLoading(true);
    console.log("CAPTURED");
    let photo = await cameraRef.current.takePictureAsync({ base64: true, quality: 1 });
    setImage(photo.uri);
    await MediaLibrary.saveToLibraryAsync(photo.uri);
  
    const result = await recommendationLogic(photo.base64);
    // console.log("Recommendation result:", result);

    setFindings({
      id: result.data._id,
      classification: result.data.stress_name,
      type: result.data.stress_type,
      recommendation: result.data.recommendation,
      level: result.data.level || 0
    })
    setIsLoading(false);
  };
  
  const pickImage = async () => {
    setIsLoading(true);
    let pickedImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(pickedImage);

    // if (!result.canceled) {
      const { uri } = pickedImage.assets[0];
      
      // Convert to base64
      const base64String = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
      setImage(uri);

      const result = await recommendationLogic(base64String);
  
      setFindings({
        id: result.data._id,
        classification: result.data.stress_name,
        type: result.data.stress_type,
        recommendation: result.data.recommendation,
        level: result.data.level || 0
      })
      setIsLoading(false);
      // }
  };

  const goBack = () => {
    router.back();
    setExpand(null);
    setImage(null);
    setIsLoading(false);
  };

  const goExpand = () => {
    setExpand(true);
  };

  return (
    <View style={styles.container}>
      
      {image ? (
        <ImageBackground
          source={{
            uri: image,
          }}
          style={styles.camera}
        >
              <TouchableOpacity
                className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start absolute"
                onPress={goBack}
              >
                <Iconify
                  icon="ion:chevron-back-circle-sharp"
                  size={54}
                  color={"#FFFFFF"}
                />
              </TouchableOpacity>
          {isLoading ? (
            <View className="flex flex-1 border border-black justify-end mt-[30%] pb-24">
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) :
              (expand ? (
            <>

              <View className="absolute w-full flex bottom-0 h-[45%] bg-white rounded-t-[40px] p-6">
                <ScrollView>
                  <Text className="text-[#049B04] text-4xl font-bold text-center">
                    
                    {findings.classification}
                  </Text>
                  <Text className="text-center text-base">
                    
                    {findings.type}
                  </Text>
                  <Text className="font-bold pb-2 text-sm">
                    
                    Recommendations:
                  </Text>
                  <Text className="text-left text-sm" >
                    
                    {findings.recommendation}
                  </Text>
                </ScrollView>
              </View>
            </>
          ) : (
            <>
              <TouchableOpacity
                className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start absolute"
                onPress={goBack}
              >
                <Iconify
                  icon="ion:chevron-back-circle-sharp"
                  size={54}
                  color={"#FFFFFF"}
                />
              </TouchableOpacity>
              <View className="absolute bottom-16 flex flex-row w-3/4 left-12 justify-between px-8 bg-[#ffffffcc] backdrop-blur-lg rounded-2xl py-4">
                <View>
                  <Text className="text-[#086608] text-2xl font-bold pb-1">
                    
                    {findings.classification}
                  </Text>
                  <Text className="text-black text-base">
                    
                    {findings.type}
                  </Text>
                </View>
                <TouchableOpacity className=" rounded-full" onPress={goExpand}>
                  <Iconify
                    icon="bi:arrow-right-circle-fill"
                    size={55}
                    color={"#086608"}
                  />
                </TouchableOpacity>
              </View>
            </>
          ))}
        </ImageBackground>
      ) : (
        <CameraView
          style={styles.camera}
          facing={facing}
          ref={cameraRef}
          mute={true}
        >
          <TouchableOpacity
            onPress={goBack}
            className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start absolute"
          >
            <Iconify
              icon="ion:chevron-back-circle-sharp"
              size={54}
              color={"#FFFFFF"}
            />
          </TouchableOpacity>
          <View className="absolute w-[100%] h-[10%] flex-row p-1 bottom-0 rounded-3xl justify-evenly items-center bg-white">

                <TouchableOpacity className="rounded-full p-1" onPress={pickImage}>
                  <Iconify
                    icon="iconoir:media-image-plus"
                    size={34}
                    color={"#049B04"}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  className="rounded-full bg-[#049B04] p-3"
                  onPress={captureImage}
                >
                  <Iconify icon="ion:camera-sharp" size={44} w color={"#ffffff"} />
                </TouchableOpacity>
                <TouchableOpacity
                  className="rounded-full p-1"
                  onPress={toggleCameraFacing}
                >
                  <Iconify icon="eva:flip-fill" size={30} color={"#049B04"} />
                </TouchableOpacity>

          </View>
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
});