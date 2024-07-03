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
    <SafeAreaView className="flex w-[100%] h-[100%] ">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <>
          <View className="flex flex-grow ">
            <View className="flex-grow" style={{ height: parseInt(screenHeight * 0.6) }}> 
              <ImageBackground className="flex-1" source={require("../../assets/images/Image (4).png")}>
                <View className="pl-4 pr-2 flex-1 justify-end items-left">
                  <Text style={{color:"#049B04", fontFamily: 'Montserrat_400Regular'}} className=" text-3xl font-bold -mb-2">Worry Less, Grow More:</Text>
                  <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-white text-3xl font-bold">Your Rice Stress Classifier</Text>
                  <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-white pb-2 text-xs">Say goodbye to field worries with spot on stress analysis, for</Text>
                  <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-white pb-4 text-xs">confident and flourishing fields.</Text>
                </View>
              </ImageBackground>
            </View>
            <View className="p-4 pb-2">
              <View className="flex-row justify-between">
                <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-3xl font-bold">Recent Scans</Text>
                <TouchableOpacity onPress={() => router.push('/recentScans')} className="justify-center">
                  <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-xs">View all</Text>
                </TouchableOpacity>
              </View>
              <View className="border-t-2 max-w-[18%] border-green-600 p-1"></View>
              <ScrollView horizontal={true} className="flex-row">
                {recentScans.map(scan => (
                  <TouchableOpacity key={scan.id} onPress={() => router.push(scan.route)} className="pl-2">
                    <Image className="rounded-xl ml-2" style={{ width: imageWidth, height: imageWidth }} source={scan.source}></Image>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View className="p-4 pt-0">
              <View className="flex-row justify-between">
                <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-3xl font-bold">Grain Gallery</Text>
                <TouchableOpacity onPress={() => router.push('/grainGallery')} className="justify-center">
                  <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-xs">View all</Text>
                </TouchableOpacity>
              </View>
              <View className="border-t-2 max-w-[18%] border-green-600 p-1"></View>
              <ScrollView horizontal={true} className="flex-row">
                {grainGallery.map(grain => (
                  <TouchableOpacity key={grain.id} onPress={() => router.push(grain.route)} className="pl-2">
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
