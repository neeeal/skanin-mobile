import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useSession } from '../ctx';
import { useFontContext } from '../ftx';
import AppLoading from 'expo-app-loading';
import { router } from 'expo-router';

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
      <View className="flex flex-1 justify-center items-center">
        <View className="mb-2">
          <Text className=" text-[#049B04] text-4xl" style={{fontFamily: 'Montserrat_700Bold' }}>Are you a</Text>
        </View>
        <LongButton text="FARMER / GUEST" color="white" route="/option"/>
        <LongButton text="AGRONOMIST" color="green" route="/option"/>
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