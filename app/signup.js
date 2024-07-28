// import React from 'react';
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
import AppLoading from 'expo-app-loading';
import { router } from 'expo-router';
import { Iconify } from 'react-native-iconify';
import Lock from '../assets/svg/Lock.svg';
import Email from '../assets/svg/Email.svg';
import make_request from '../helpers/url_server';
import { REGISTER } from '../helpers/urls';

export default function Signup() {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const { fontsLoaded } = useFontContext();
  const [secureText, setSecureText] = useState(true);

  const handleFirstnameChange = (value) => {
    setFirstname(value);
  }

  const handleLastnameChange = (value) => {
    setLastname(value);
  }

  const handleUsernameChange = (value) => {
    setUsername(value);
  }

  const handleEmailChange = (value) => {
    setEmail(value);
  }

  const handleContactChange = (value) => {
    setContact(value);
  }

  const handlePasswordChange = (value) => {
    setPassword(value);
  }

  const validateEntries = (entries) => {
    let isValid = true;
    Object.keys(entries).forEach(key => {
      if (!entries[key] || String(entries[key]).trim().length === 0) {
        isValid = false;
      }
    });
    return isValid;
  }

  const registerLogic = async () => {
    let response;
    const entries = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
      contact: contact,
      password: password
    }

    if (!validateEntries(entries)) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    try {
      response = await make_request({
        relative_url: REGISTER,
        body: entries,
        method: 'POST'
      });
      console.log('Register successful:', response);;
    } catch (err) {
      if (err.message.includes("Client Error")) {
        Alert.alert('Failed to Register', err.message);
        return {status:false}
      }
      else {
        Alert.alert('Error Encountered', err.message);
        throw new Error('Error Encountered');
      }
    }
    return response
  }

  const onPressRegister = async() => {
    const result = await registerLogic();
    if (result.status === 200) {
      Alert.alert('Signup Success');
      router.push("/login");
    }
    else {
      Alert.alert('Error Encountered',);
      throw new Error('Error Encountered');
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
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      className="flex-1" // Ensure the KeyboardAvoidingView takes the full screen
    >
      <ImageBackground 
        source={require('../assets/images/signIn 4.png')} 
        className="flex-1 object-cover absolute top-0 right-0 bottom-0 left-0"
      >
          <TouchableOpacity 
            onPress={() => router.back()} 
            className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start absolute"
          >
            <Iconify icon="ion:chevron-back-circle-sharp" size={54} color={"#FFFFFF"} />
          </TouchableOpacity>
        <View className="flex-1 justify-center items-center pb-40 pt-40">          
          <View className="mb-16 ">
            <Text style={{ fontFamily: 'Montserrat_400Regular' }} className="text-center text-[#049B04] text-4xl font-bold">Create Account</Text>
            <Text style={{ fontFamily: 'Montserrat_400Regular', textShadowColor: 'rgba(0, 0, 0, 0.40)', textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 5 }} className="text-xs text-center text-white">Enter your complete details to register</Text>
          </View>
          
          <View className="mb-8 w-full items-center ">
            <View className="pl-3 w-[80%] py-2 flex-row mb-4 bg-white rounded-md">
              <Iconify icon="mdi:user-box" size={32} color={"#086608"} />
              <TextInput 
                className="pl-2 flex flex-1 mr-2" 
                placeholder='First Name' 
                placeholderTextColor={"#049B04"} 
                value={firstName} 
                onChangeText={handleFirstnameChange}
              />
            </View>
            <View className="pl-3 w-[80%] py-2 flex-row mb-4 bg-white rounded-md">
              <Iconify icon="mdi:user-box" size={32} color={"#086608"} />
              <TextInput 
                className="pl-2 flex flex-1 mr-2" 
                placeholder='Last Name' 
                placeholderTextColor={"#049B04"} 
                value={lastName} 
                onChangeText={handleLastnameChange}
              />
            </View>
            <View className="pl-3 w-[80%] py-2 flex-row mb-4 bg-white rounded-md">
              <Iconify icon="mdi:user-box" size={32} color={"#086608"} />
              <TextInput 
                className="pl-2 flex flex-1 mr-2" 
                placeholder='Username' 
                placeholderTextColor={"#049B04"} 
                value={username} 
                onChangeText={handleUsernameChange}
              />
            </View>
            <View className="w-[80%] py-2 flex-row mb-4 pl-3 bg-white rounded-md">
              <Email width="28" height="28"/>
              <TextInput 
                className="pl-1 flex flex-1 mr-2 ml-2" 
                placeholder='Email Address' 
                placeholderTextColor={"#049B04"} 
                value={email} 
                onChangeText={handleEmailChange}
              />
            </View>
            <View className="w-[80%] py-2 flex-row mb-4 pl-3 bg-white rounded-md">
              <Iconify icon="game-icons:phone" size={32} color={"#086608"} />
              <TextInput 
                className="flex flex-1 mr-2 ml-2" 
                placeholder='Contact Number' 
                placeholderTextColor={"#049B04"} 
                value={contact} 
                onChangeText={handleContactChange}
              />
            </View>
            <View className="pl-3 w-[80%] py-2 flex-row bg-white rounded-md">
              <Lock width="32" height="32"/>
              <TextInput  
                className="pl-2 flex flex-1 mr-2" 
                placeholder='Password' 
                placeholderTextColor={"#049B04"} 
                value={password} 
                onChangeText={handlePasswordChange}
                secureTextEntry={secureText}
              />
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
                onPress={() => router.push('/login')} 
                className="p-1"
              >
                <Text className="text-center underline text-white text-xs">Already have an account?</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <TouchableOpacity 
            onPress={onPressRegister} 
            className="bg-[#049B04] rounded-3xl py-3 my-2 w-[80%]"
            style={styles.shadow}
          >
            <Text className="text-white text-center" style={{ fontFamily: 'Montserrat_400Regular' }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
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
