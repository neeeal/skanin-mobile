import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { Text, View } from "react-native";

export default function Scan() {
  return (
    // <View style={styles.container}>
    <View className="border border-black">
      <Text className="font-bold">Scan page!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });