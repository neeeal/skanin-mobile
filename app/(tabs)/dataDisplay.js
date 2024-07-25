import { useState } from 'react';
import { 
  Text, 
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Iconify } from "react-native-iconify";

export default function DataDisplay() {
  const activeData = useLocalSearchParams();
  const useResetActiveData = () => router.back();
  
  // Log activeData to ensure it has the expected structure
  console.log('Active Data:', activeData);

  // Ensure activeData.rice_image is a valid Base64 string
  const imageUri = activeData.rice_image ? `data:image/png;base64,${activeData.rice_image}` : null;
  
  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity
          className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start absolute px-4"
          onPress={useResetActiveData}
        >
          <Iconify
            icon="weui:back-outlined"
            size={36}
            color={"#000000"}
          />
        </TouchableOpacity>

        <View className="flex justify-center items-center w-full h-full mt-[15%]">
          <View className="mb-8">
            {imageUri ? 
              <Image 
                source={{ uri: imageUri }} 
                style={{ width: Dimensions.get('window').width, height: undefined, aspectRatio: 1 }} 
              />
              :
              <Text>No image available.</Text>
            }
          </View>

          <View className="px-8">
            <View className="pb-4 flex-row justify-between max-w-[100%]">
              <View className="flex w-[57%]">
                <Text className="text-2xl " style={{fontFamily: 'Montserrat_700Bold'}}>{activeData.stress_name}</Text>
                <Text className="underline text-lg " style={{fontFamily: 'Montserrat_300Light'}}>{activeData.stress_type}</Text>
              </View>
              {activeData.stress_level ? 
                <View className="flex-row items-center flex-wrap max-w-[43%]">
                  {Array.from({ length: 5 }, (_, index) => 1 + index).map((item, index) => (
                    <Iconify
                      key={index}
                      icon="mdi:fire"
                      size={32}
                      color={index >= activeData.stress_level ? "#000000" : "#ff9800"}
                      style={{marginHorizontal: -3}}
                    />
                  ))}
                </View>
                :
                <View></View>
              }
            </View>

            <View className="pb-4">
              <Text className="text-3xl text-[#049B04]" style={{fontFamily: 'Montserrat_700Bold'}}>What it does</Text>
              <Text className="text-sm" style={{fontFamily: 'Montserrat_400Regular'}}>{activeData.description}</Text>
            </View>

            <View className="pb-4">
              <Text className="text-3xl text-[#049B04]" style={{fontFamily: 'Montserrat_700Bold'}}>Recommendation</Text>
              <Text className="text-sm" style={{fontFamily: 'Montserrat_400Regular'}}>{activeData.recommendation}</Text>
            </View>

            <View className="py-8"></View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
