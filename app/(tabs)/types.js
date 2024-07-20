import { 
  Text, 
  View, 
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";

export default function Types() {
  const imageWidth = parseInt(Dimensions.get('window').width / 4);
  return (
<>
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

  <View className="flex justify-center w-full h-full">

    <View className="flex border border-black mb-8">
      <Text className="text-4xl" style={{fontFamily: 'Montserrat_700Bold'}}>Grain Gallery</Text>
    </View>

    <View className="flex border border-black px-6">
      <View className="border border-black min-h-[10%] mb-8 flex-row rounded-2xl ">
        <View style={{ width: imageWidth, height: imageWidth, borderColor: "black", borderWidth: 2 }} className="rounded-2xl">
          <Image source={require("../../assets/images/splash.png")} style={{flex:1, width: undefined, height: undefined, borderRadius: 100}}/>
        </View>
        <View className="flex-col pl-8 justify-center">
          <Text className="text-[#049B04] text-2xl" style={{fontFamily: 'Montserrat_600SemiBold'}}>Sheath Blight</Text>
          <Text className="text-base" style={{fontFamily: 'Montserrat_400Regular'}}>Abiotic Stress</Text>
        </View>
      </View>

      <View className="border border-black min-h-[10%] mb-8">
        <Text>Entries</Text>
      </View>

      <View className="border border-black min-h-[10%] mb-8">
        <Text>Entries</Text>
      </View>

      <View className="border border-black min-h-[10%] mb-8">
        <Text>Entries</Text>
      </View>

    </View>

    <View className="flex-row border border-black justify-evenly">

      <View className=" border-red-500 border">
        <Iconify
        icon="material-symbols-light:navigate-before"
        size={36}
        color={"#000000"}
        />
      </View>   

      <View className="flex-row border-red-500 border">
        <TouchableOpacity className="border border-black flex justify-center px-2"><Text>1</Text></TouchableOpacity>
        <TouchableOpacity className="border border-black flex justify-center px-2"><Text>2</Text></TouchableOpacity>
        <TouchableOpacity className="border border-black flex justify-center px-2"><Text>3</Text></TouchableOpacity>
      </View>

      <View>
          <Iconify
          icon="material-symbols-light:navigate-next"
          size={36}
          color={"#000000"}
          />
      </View>  

    </View>

  </View>
</>
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