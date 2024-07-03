import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { Text, View, TouchableOpacity } from "react-native";
import { router } from 'expo-router';
import { Iconify } from 'react-native-iconify';

export default function Scan() {
  return (
    <View>
        <TouchableOpacity onPress={() => router.back()} className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start absolute">
          <Iconify icon="ion:chevron-back-circle-sharp" size={54} color={"#FFFFFF"} />
        </TouchableOpacity>
    </View>
    // <View className="border border-black">
    //   <Text className="font-bold">Scan page!</Text>
    //   <StatusBar style='auto' />
    // </View>
  );
}