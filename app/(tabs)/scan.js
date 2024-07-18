import { useState, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { router } from "expo-router";
import { Iconify } from "react-native-iconify";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [image, setImage] = useState(null);
  const [expand, setExpand] = useState(null);
  const [libraryPermission, requestPermissionlibrary] =
    MediaLibrary.usePermissions();
  const [findings, setFindings] = useState({
    id: 0,
    classification: "False Smut",
    type: "Biotic Stress",
    recommendations: `1. Plant Resistant Varieties: Use resistant rice varieties; consult local agricultural authorities for updated lists.
2. Crop Management Measures:
• Adjust Planting Time: Sow seeds early in the rainy season.
• Nitrogen Fertilizer Application: Split into multiple treatments to avoid excessive use.
• Field Flooding: Flood the field as frequently as possible.
• Silicon Fertilizers: Apply to silicon-deficient soils. Consider cost-effective sources like rice genotypes high in silicon. Avoid using infected straw as a silicon source.
• Systemic Fungicides: Use judiciously, such as triazoles and strobilurins, particularly during heading stage for effective control.`,
  });

  if (!permission || !libraryPermission) {
    return <View />;
  }

  const tryPermission = () => {
    requestPermission(oldPermission=>useCameraPermissions());
    requestPermissionlibrary(oldPermission=>MediaLibrary.usePermissions());
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
          <TouchableOpacity className="w-[50%] border border-black mt-2 p-1 rounded-xl bg-[#049B04]" onPress={tryPermission}>
            
            <Text className="text-white text-center"> Grant Permission </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const captureImage = async () => {
    console.log("CAPTURED");
    let photo = await cameraRef.current.takePictureAsync();
    setImage(photo.uri);
    console.log(photo.uri);
    MediaLibrary.saveToLibraryAsync(photo.uri);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const goBack = () => {
    router.back();
    setExpand(null);
    setImage(null);
  };

  const goExpand = () => {
    setExpand(true);
    console.log(expand);
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
          
          {expand ? (
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
                  <Text className="text-left text-sm">
                    
                    {findings.recommendations}
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
              <View className="absolute bottom-16 flex flex-row w-3/4 left-12 justify-between px-8 bg-[#ffffff55] backdrop-blur-lg rounded-2xl py-4">
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
          )}
        </ImageBackground>
      ) : (
        <CameraView
          style={styles.camera}
          facing={facing}
          ref={cameraRef}
          mute={true}
        >
          <TouchableOpacity
            onPress={() => router.back()}
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