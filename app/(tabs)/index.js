// import { StatusBar } from "expo-status-bar";
// // import { StyleSheet, Text, View } from "react-native";
// import { Text, View } from "react-native";

// export default function Home() {
//   return (
//     // <View style={styles.container}>
//     <View className="border border-black">
//       <Text className="font-bold">Home page!</Text>
//       <StatusBar style='auto' />
//     </View>
//   );
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// // });

import { Text, View } from 'react-native';

import { useSession } from '../../ctx';

export default function Index() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}>
        Sign Out
      </Text>
    </View>
  );
}
