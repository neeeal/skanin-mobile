
// import { useState } from 'react';
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

export default function DataDisplay(){
  const activeData = useLocalSearchParams();
  const useResetActiveData = () => router.back();
  return (
        <>
          <ScrollView contentContainerStyle={{ flexGrow: 1}}>
  
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
              <Image source={activeData.image} style={{ maxWidth:parseInt(Dimensions.get('window').width)}}/>
            </View>
  
            <View className="px-8">
              <View className="pb-4 flex-row justify-between">
                <View className="flex">
                  <Text className="text-3xl" style={{fontFamily: 'Montserrat_700Bold'}}>{activeData.name}</Text>
                  <Text className=" underline text-xl" style={{fontFamily: 'Montserrat_300Light'}}>{activeData.type}</Text>
                </View>
  
                {activeData.level ? 
                              <View className="flex-row items-center">
                              {Array.from(
                                  { length: 5 },
                                  (value, index) => 1 + index * 1
                                  ).map((item, index)=>
                                    <Iconify
                                    key={index}
                                    icon="mdi:fire"
                                    size={32}
                                    color={ index>=activeData.level ? "#000000" : "#ff9800"}
                                    style={{marginHorizontal: -3}}
                                    />
                                )}
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
                <Text className="text-sm" tyle={{fontFamily: 'Montserrat_400Regular'}}>{activeData.recommendation}</Text>
              </View>
  
              <View className="py-8">
                
              </View>
            </View>
  
          </View>
        </ScrollView>
  </>
      )
}