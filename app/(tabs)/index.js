import React, { useState } from 'react';
import { 
  Text, 
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const imageWidth = parseInt(Dimensions.get('window').width / 2);
  const screenHeight = parseInt(Dimensions.get('window').height);

  const [recentScans, setRecentScans] = useState([
    { id: 1, source: require("../../assets/images/Image (4).png"), route: '/scanDetails/1' },
    { id: 2, source: require("../../assets/images/Image (4).png"), route: '/scanDetails/2' }
  ]);

  const [grainGallery, setGrainGallery] = useState([
    { id: 1, source: require("../../assets/images/Image (4).png"), route: '/grainDetails/1' },
    { id: 2, source: require("../../assets/images/Image (4).png"), route: '/grainDetails/2' }
  ]);

  return (
    <SafeAreaView className="flex w-[100%] h-[100%] border border-black">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <>
          <View className="flex flex-grow border border-black">
            <View className="border border-red-500 flex-grow" style={{ height: parseInt(screenHeight * 0.6) }}> 
              <ImageBackground className="flex-1" source={require("../../assets/images/Image (4).png")}>
                <View className="pl-4 pr-8 border border-black flex-1 justify-end items-left">
                  <Text className="text-white">Title</Text>
                  <Text className="text-white">Title</Text>
                  <Text className="text-white">Title</Text>
                  <Text className="text-white">Title</Text>
                </View>
              </ImageBackground>
            </View>
            <View className="p-4">
              <View className="flex-row justify-between">
                <Text>Recent Scans</Text>
                <TouchableOpacity onPress={() => router.push('/recentScans')}>
                  <Text>View all</Text>
                </TouchableOpacity>
              </View>
              <View className="border-t max-w-[10%] ml-4 border-green-800 p-1"></View>
              <ScrollView horizontal={true} className="flex-row">
                {recentScans.map(scan => (
                  <TouchableOpacity key={scan.id} onPress={() => router.push(scan.route)} className="border border-green-400 pl-2">
                    <Image className="rounded-xl ml-2" style={{ width: imageWidth, height: imageWidth }} source={scan.source}></Image>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View className="p-4">
              <View className="flex-row justify-between">
                <Text>Grain Gallery</Text>
                <TouchableOpacity onPress={() => router.push('/grainGallery')}>
                  <Text>View all</Text>
                </TouchableOpacity>
              </View>
              <View className="border-t max-w-[10%] ml-4 border-green-800 p-1"></View>
              <ScrollView horizontal={true} className="flex-row">
                {grainGallery.map(grain => (
                  <TouchableOpacity key={grain.id} onPress={() => router.push(grain.route)} className="border border-green-400 pl-2">
                    <Image className="rounded-xl ml-2" style={{ width: imageWidth, height: imageWidth }} source={grain.source}></Image>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
}
