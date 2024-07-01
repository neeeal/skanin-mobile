import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useSession } from '../ctx';
import { useFontContext } from '../ftx';
import AppLoading from 'expo-app-loading';
import { router } from 'expo-router';
import LongButton from '../components/button/long';
import { Iconify } from 'react-native-iconify';

export default function Landing() {
  const { fontsLoaded } = useFontContext();
  const { signIn } = useSession();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground 
      source={require('../assets/images/signIn 2.png')} 
      className="flex flex-1 object-cover"
    >
      <View className="flex flex-1 items-center">
        <TouchableOpacity onPress={() => router.replace("/")} className="flex  mx-2 mt-[13%] mb-[8%] p-2 self-start">
              <Iconify icon="ion:chevron-back-circle-sharp" size={54} color={"#FFFFFF"} />
        </TouchableOpacity>
        <View className="flex mb-2 w-full px-8 pb-[22%]">
            <Text className="text-white text-6xl pb-5" style={{fontFamily: 'Montserrat_700Bold' }}>The best </Text>
            <Text className="text-white text-6xl pb-5" style={{fontFamily: 'Montserrat_700Bold' }}>app </Text>
            <Text className="text-white text-6xl pb-5" style={{fontFamily: 'Montserrat_700Bold' }}>for your </Text>
            <Text className="text-white text-6xl pb-5" style={{fontFamily: 'Montserrat_700Bold' }}>rice crops </Text>
        </View>
        <LongButton text="Login" color="white" route="/login"/>
        <LongButton text="Signup" color="green" route="/signup"/>
      </View>
      {/* <View className="">
        <Text className=""
          onPress={() => {
            signIn();
            router.replace('/');
          }}
        >
          Sign In
        </Text>
      </View> */}
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