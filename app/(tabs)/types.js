import { 
  Text, 
  View, 
  TouchableOpacity } from "react-native";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";

export default function Types() {
  return (
    <View className="flex justify-center w-full h-full">

      <View className="flex border border-black">
        <TouchableOpacity
          className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start absolute"
          onPress={()=>router.back()}
        >
          <Iconify
            icon="weui:back-outlined"
            size={36}
            color={"#000000"}
          />
        </TouchableOpacity>
      </View>

      <View className="flex border border-black">
        <Text>Header</Text>
      </View>

      <View className="flex border border-black">
        <Text>Entries</Text>
      </View>
      
      <View className="flex border border-black">
        <Text>Nav</Text>
      </View>

    </View>
  )
}

// export default function Types() {
//   return (
//     // <View style={styles.container}>
//     // <View className="border border-black">
//     //   <Text className="font-bold">Types page!</Text>
//     //   <StatusBar style='auto' />
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });