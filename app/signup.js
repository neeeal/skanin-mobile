import React from 'react';
import { 
    Text, 
    View, 
    ImageBackground, 
    TouchableOpacity, 
    StyleSheet, 
    TextInput, 
    KeyboardAvoidingView, 
    Platform,
    Image
} from 'react-native';
import { useFontContext } from '../ftx';
import AppLoading from 'expo-app-loading';
import { router } from 'expo-router';

export default function Signup() {
  const { fontsLoaded } = useFontContext();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground 
    source={require('../assets/images/signIn 4.png')} 
    className="h-[100%] w-[100%] object-cover absolute top-0 right-0 bottom-0 left-0"
    // style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height}}
  >
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      className="flex items-center"
    >
        <TouchableOpacity onPress={() => router.replace("/option")} className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start ">
          <Image source={require('../assets/images/Back To.png')}/>
        </TouchableOpacity>
        <View className="mb-16 pt-16 ">
          <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-center text-[#049B04] text-4xl font-bold">Create Account</Text>
          <Text style={{fontFamily: 'Montserrat_400Regular',   textShadowColor: 'rgba(0, 0, 0, 0.40)',textShadowOffset: {width: -1, height: 1},textShadowRadius: 5}} className="text-xs  text-center text-white">Enter your complete details to register</Text>
        </View>
        <View className="mb-8 w-full items-center">
          <View className="w-[80%] py-2 flex-row mb-4 bg-white rounded-md ">
            <Image source={require('../assets/images/Name.png')}/>
            <TextInput className="pl-2 flex flex-1 mr-2 " placeholder='First Name' placeholderTextColor={"#049B04"}/>
          </View>
          <View className="w-[80%] py-2 flex-row mb-4 bg-white rounded-md ">
            <Image source={require('../assets/images/Name.png')}/>
            <TextInput className="pl-2 flex flex-1 mr-2 " placeholder='Last Name' placeholderTextColor={"#049B04"}/>
          </View>
          <View className="w-[80%] py-2 flex-row mb-4 pl-2 bg-white rounded-md ">
            <Image source={require('../assets/images/Email.png')}/>
            <TextInput className="pl-2 flex flex-1 mr-2 ml-2" placeholder='Email Address' placeholderTextColor={"#049B04"}/>
          </View>
          <View className="w-[80%] py-2 flex-row mb-4 pl-2 bg-white rounded-md ">
            <Image source={require('../assets/images/Call.png')}/>
            <TextInput className="pl-2 flex flex-1 mr-2 ml-2" placeholder='Email Address' placeholderTextColor={"#049B04"}/>
          </View>
          <View className="w-[80%] py-2 flex-row bg-white rounded-md">
            <Image source={require('../assets/images/Lock.png')}/>
            <TextInput  className="pl-2 flex flex-1 mr-2" placeholder='Password' placeholderTextColor={"#049B04"} secureTextEntry />
          </View>
          <View className="mt-2">
            <TouchableOpacity 
            onPress ={
              () => {
                router.push('/login')
              }
            }
            className=" p-1"><Text className="text-center underline text-white text-xs">Already have an account?</Text></TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity 
          onPress={() => {
            // TODO: Add login logic
            router.push("/login");
          }} 
          className="bg-[#049B04] rounded-3xl py-3 my-2 w-[80%]"
          style={styles.shadow}
        >
          <Text className="text-white text-center" style={{ fontFamily: 'Montserrat_400Regular' }}>Sign Up</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
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
});
