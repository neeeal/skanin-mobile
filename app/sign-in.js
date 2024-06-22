import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useSession } from '../ctx'; // Adjust the import path accordingly
import { useFontContext } from '../ftx'; // Adjust the import path accordingly
import AppLoading from 'expo-app-loading';
import { router } from 'expo-router';
export default function SignIn() {
  const { fontsLoaded } = useFontContext();
  const { signIn } = useSession();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground 
      source={require('../assets/images/signIn 2.png')} 
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View className="flex flex-1 justify-center items-center">
        <View className="mb-2">
          <Text className=" text-[#049B04] text-4xl" style={{fontFamily: 'Montserrat_700Bold' }}>Are you a</Text>
        </View>
        <TouchableOpacity className="bg-white rounded-3xl py-3 my-2 w-[80%] shadow" style={styles.shadow}>
          <Text className=" text-[#086608] text-center " style={{fontFamily: 'Montserrat_400Regular'}}>FARMER / GUEST</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#049B04] rounded-3xl py-3 my-2 w-[80%]" style={styles.shadow}>
          <Text className=" text-white text-center" style={{fontFamily: 'Montserrat_400Regular'}}>AGRONOMIST</Text>
        </TouchableOpacity>
      </View>
      <View className="">
        <Text className=""
          onPress={() => {
            signIn();
            router.replace('/');
          }}
        >
          Sign In
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})