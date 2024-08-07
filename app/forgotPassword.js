import { useState } from 'react';
import { 
    Text, 
    View, 
    ImageBackground, 
    TouchableOpacity, 
    StyleSheet, 
    TextInput, 
    KeyboardAvoidingView, 
    Platform,
    Alert
} from 'react-native';
import { useFontContext } from '../ftx';
import { Iconify } from 'react-native-iconify';
import AppLoading from 'expo-app-loading';
import { router } from 'expo-router';
import make_request from '../helpers/url_server';
import { FORGOT_PASSWORD } from '../helpers/urls';

export default function ForgotPassword() {
  const { fontsLoaded } = useFontContext();
  const [email, setEmail] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const forgotPasswordLogic = async () => {
    let response;
    try {
      response = await make_request({
        relative_url: FORGOT_PASSWORD,
        body: {
          email: email,
        },
        method: 'POST'
      });
      console.log('Sent email successful:', response);;
    } catch (err) {
      if (err.message.includes("Client Error")) {
        Alert.alert('Failed to send email', err.message);
        return {status:false}
      }
      else {
        Alert.alert('Error Encountered', err.message);
        throw new Error('Error Encountered');
      }
    }
    return response
  }

  const handleForgotPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Email is required');
      return;
    }

    const response = forgotPasswordLogic();
    if (response){
      Alert.alert('Success', "Instructions on password reset sent to email.");
      router.push('/login');
    }
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
        <TouchableOpacity onPress={() => router.replace("/login")} className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start ">
          
          <Iconify icon="ion:chevron-back-circle-sharp" size={54} color={"#FFFFFF"} />
        </TouchableOpacity>
        <View className="mb-6 px-7">
          <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-left text-[#049B04] text-4xl font-bold">Reset Password</Text>
          <Text style={{fontFamily: 'Montserrat_400Regular',   textShadowColor: 'rgba(0, 0, 0, 0.20)',textShadowOffset: {width: -1, height: 1},textShadowRadius: 5}}>
            Enter the email associated with your account and we'll send an email with instructions to reset your password
          </Text>
        </View>
        <View className="mb-3 w-full items-center">
          <View className="w-[80%] py-2 pl-3 flex-row bg-white rounded-md ">
            {/* <Image source={require('../assets/images/User.png')}/> */}
            <Iconify icon="material-symbols:person" size={32} color={"#086608"} />
            <TextInput className="pl-2 flex flex-1 mr-2 " placeholder='Email Address' placeholderTextColor={"#049B04"} value={email}  onChangeText={handleEmailChange} />
          </View>
        </View>
        <TouchableOpacity 
          onPress={() => {
            // TODO: Add login logic
            // Alert.alert('Under Development', 'This feature is still under development. Please contact the developers for further information or other concerns.');
            // router.push("/login");
            handleForgotPassword();
          }} 
          className="bg-[#049B04] rounded-3xl py-3 my-2 w-[80%]"
          style={styles.shadow}
        >
          <Text className="text-white text-center" style={{ fontFamily: 'Montserrat_400Regular' }}>Send Instructions</Text>
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
