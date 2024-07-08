import React, { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import { Iconify } from 'react-native-iconify';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [image, setImage] = useState(null);
  const [libraryPermissionResponse, requestPermissionlibrary] = MediaLibrary.usePermissions();

  if (!permission || !libraryPermissionResponse) {
    return <View />;
  }

  if (!permission.granted || !libraryPermissionResponse.granted) {
    return (
      <View className="bg-gray-800  flex flex-1">
        <TouchableOpacity  className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start absolute" onPress={goBack}>
          <Iconify icon="ion:chevron-back-circle-sharp" size={54} color={"#FFFFFF"} />
        </TouchableOpacity>
        <View className="flex flex-1 justify-center items-center">
          <Text className="text-white">We need your permission to show the camera</Text>
          <TouchableOpacity className="w-[50%] border border-black mt-2 p-1 rounded-xl bg-[#049B04]"><Text className="text-white text-center">Grant Permission</Text></TouchableOpacity>
        </View>
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const captureImage = async () => { 
    console.log("CAPTURED") 
    let photo = await cameraRef.current.takePictureAsync();
    setImage(photo.uri);
    console.log(photo.uri);
    MediaLibrary.saveToLibraryAsync(photo.uri)
  }

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
    setImage(null);
  }

  return (
    <View style={styles.container}>
      {image ? (
        <ImageBackground source={{ uri: image }} style={styles.camera} >
          <TouchableOpacity  className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start absolute" onPress={goBack}>
            <Iconify icon="ion:chevron-back-circle-sharp" size={54} color={"#FFFFFF"} />
          </TouchableOpacity>
        </ImageBackground>
      ) : (
        <CameraView style={styles.camera} facing={facing} ref={cameraRef} mute={true}>
          <TouchableOpacity onPress={() => router.back()} className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start absolute">
            <Iconify icon="ion:chevron-back-circle-sharp" size={54} color={"#FFFFFF"} />
          </TouchableOpacity>
          <View className="absolute w-[100%] h-[10%] flex-row p-1 bottom-0 rounded-3xl justify-evenly items-center bg-white">
            <TouchableOpacity className="rounded-full p-1" onPress={pickImage}>
              <Iconify icon="iconoir:media-image-plus" size={34} color={"#049B04"} />
            </TouchableOpacity>
            <TouchableOpacity className="rounded-full bg-[#049B04] p-3" onPress={captureImage}>
              <Iconify icon="ion:camera-sharp" size={44} w color={"#ffffff"} />
            </TouchableOpacity>
            <TouchableOpacity className="rounded-full p-1" onPress={toggleCameraFacing}>
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
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  }
});
