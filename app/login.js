import React from 'react';
import { 
    Text, 
    View, 
    ImageBackground, 
    TouchableOpacity, 
    StyleSheet, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    SafeAreaView
} from 'react-native';
import { useSession } from '../ctx';
import { useFontContext } from '../ftx';
import AppLoading from 'expo-app-loading';
import { router } from 'expo-router';
import LongButton from '../components/button/long';

export default function Login() {
  const { fontsLoaded } = useFontContext();
  const { signIn } = useSession();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground 
      source={require('../assets/images/signIn 2.png')} 
      className="flex flex-1 object-cover fixed"
    >
      <KeyboardAvoidingView>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
          {/* <View style={{ flex: 1 }}> */}
            <View>
              <Text>Welcome back!</Text>
              <Text>Login to your personal account</Text>
            </View>
            <View>
              <TextInput placeholder='Email Address'></TextInput>
              <TextInput placeholder='Password'></TextInput>
              <TouchableOpacity><Text>Forgot Password?</Text></TouchableOpacity>
              <TouchableOpacity><Text>Don't have an account?</Text></TouchableOpacity>
            </View>
            <TouchableOpacity 
              onPress={() => {
                signIn();
                router.replace("/");
              }} 
              className="bg-[#049B04] rounded-3xl py-3 my-2 w-[80%]"
              style={styles.shadow}>
              <Text className="text-white text-center" style={{ fontFamily: 'Montserrat_400Regular' }}>Login</Text>
            </TouchableOpacity>
          {/* </View> */}
        {/* </TouchableWithoutFeedback> */}
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
