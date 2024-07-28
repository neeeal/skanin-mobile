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
import { Iconify } from 'react-native-iconify';
import { useFontContext } from '../ftx';
import AppLoading from 'expo-app-loading';
import { router } from 'expo-router';
import Lock from '../assets/svg/Lock.svg';
import make_request from '../helpers/url_server';
import { LOGIN } from '../helpers/urls';
import { useSession } from '../ctx';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { fontsLoaded } = useFontContext();
  const [secureText, setSecureText] = useState(true);

  const handleUserChange = (value) => {
    setUser(value);
  }

  const handlePasswordChange = (value) => {
    setPassword(value);
  }

  const { signIn, signOut, session } = useSession();

  const loginLogic = async () => {
    let response;
    try {
      response = await make_request({
        relative_url: LOGIN,
        body: {
          user: user,
          password: password
        },
        method: 'POST',
        save_context: true
      });
      console.log('Login successful:', response);;
    } catch (err) {
      if (err.message.includes("User is already logged in.")) {
        Alert.alert('Already Logged in', "Redirecting to Home");
        return response
      }
      else if (err.message.includes("Client Error")) {
        console.error('Failed to login:', err);
        Alert.alert('Failed to login', err.message);
        return {status:false}
      }
    }
    return response
  }

  const onPressLogin = async() => {
    const result = await loginLogic();
      console.log("result happened her:            ",result)
    if (result.status === 200) {
      // console.log("Succesfully logged in. Now here part 2.",result.data)
      // saveResponseBody(result.data)
    console.log("before", session);
      // Alert.alert('Logging in', JSON.stringify(session));
      signIn(result.data.token, result.data._id);
      console.log("THIS IS SAVED", session)
      router.push('/home');
    }
    else if (result.status === 401) {
      signOut();
      Alert.alert('Unauthorized', `: Please login again`);
      throw new Error('Unauthorized: Session has been cleared');
    }
  }

  const onPressToggle = () => {
    if (secureText){
      setSecureText(false);
      // setIcon('mdi:eye-off-outline');
    } else {
      setSecureText(true);
      // setIcon('mdi:eye-outline');
    }
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground 
      source={require('../assets/images/signIn 4.png')} 
      className="h-[100%] w-[100%] object-cover absolute top-0 right-0 bottom-0 left-0"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        className="flex items-center"
      >
        <TouchableOpacity onPress={() => router.replace("/option")} className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start ">
          <Iconify icon="ion:chevron-back-circle-sharp" size={54} color={"#FFFFFF"} />
        </TouchableOpacity>
        <View className="mb-16 pt-16 ">
          <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-center text-[#049B04] text-4xl font-bold">Welcome back!</Text>
          <Text style={{fontFamily: 'Montserrat_400Regular',   textShadowColor: 'rgba(0, 0, 0, 0.40)',textShadowOffset: {width: -1, height: 1},textShadowRadius: 5}} className="text-xs  text-center text-white">Login to your personal account</Text>
        </View>
        <View className="mb-8 w-full items-center">
          <View className="w-[80%] py-2 flex-row mb-4 pl-3 bg-white rounded-md ">
            <Iconify icon="material-symbols:person" size={32} color={"#086608"} />
            <TextInput className="flex flex-1 mr-2 ml-2" placeholder='Username or Email Address' placeholderTextColor={"#049B04"} value={user} onChangeText={handleUserChange}/>
          </View>
          <View className="w-[80%] py-2 pl-3 flex-row bg-white rounded-md">
            <Lock width="32" height="32"/>
            <TextInput  className="pl-2 flex flex-1 mr-2" placeholder='Password' placeholderTextColor={"#049B04"} value={password} onChangeText={handlePasswordChange} secureTextEntry={secureText}/>
            <TouchableOpacity onPress={onPressToggle} className='self-center pr-4'>
              {
                secureText ? (
                  <Iconify
                  icon='mdi:eye-off-outline' // Icons for visibility
                  size={24}
                  color={"#086608"} // Adjust color as needed
                />
                ) : 
                (
                  <Iconify
                  icon='mdi:eye-outline' // Icons for visibility
                  size={24}
                  color={"#086608"} // Adjust color as needed
                />
                )
              }
            </TouchableOpacity>
          </View>
          <View className="mt-2">
            <TouchableOpacity 
              onPress={() => router.push("/forgotPassword")}
              className=" p-1"
            >
              <Text className="text-center underline text-white text-xs">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => router.push("/signup")}
              className="mb-1 p-1"
            >
              <Text className="text-center underline text-white text-xs">Don't have an account?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity 
          onPress={onPressLogin} 
          className="bg-[#049B04] rounded-3xl py-3 my-2 w-[80%]"
          style={styles.shadow}
        >
          <Text className="text-white text-center" style={{ fontFamily: 'Montserrat_400Regular' }}>Login</Text>
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
