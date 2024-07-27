import { useEffect, useState } from 'react';
import { 
  Text, 
  View, 
  ImageBackground, 
  ActivityIndicator,
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import { useSession } from '../../ctx';
import { useFontContext } from '../../ftx';
import AppLoading from 'expo-app-loading';
import { router } from 'expo-router';
import LongButton from '../../components/button/long';
import make_request from '../../helpers/url_server';
import { GET_ONE_USER } from '../../helpers/urls';

export default function Landing() {
  const { session } = useSession();
  const { fontsLoaded } = useFontContext();
  const [isLoading, setIsLoading] = useState(true);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  useEffect(()=>{
    const fetchData = async () => {
      setIsLoading(true);

      console.log("SESSION HERE", session);
      if (!session || !session.token || !session.userId) {
        // Alert.alert("Error", "Session is invalid. Please logout and log in again.");
          setIsLoading(false);
          return;
      }

      let response;
      try {
        response = await make_request({
          relative_url: GET_ONE_USER+`/${session.userId}`,
          HEADERS: {
            "Authorization": `Bearer ${session.token}`
          },
          method: 'GET'
        });
          } catch (err) {
        console.log("Error fetching user data:", err);
      } finally{
        if (response.status && response.status == 200) {
          router.push("/home")
          console.log("worked")
        }else{
          setIsLoading(false);
        }
      }
    }

    const result = fetchData();

  },
  []);

  return (
    <ImageBackground 
      source={require('../../assets/images/signIn 2.png')} 
      className="flex flex-1 object-cover"
    >
      {
        isLoading ? (
            <View className="flex flex-1  justify-center mt-[30%] pb-24">
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
        ) :
        (
          <View className="flex flex-1 justify-center items-center">
            <View className="mb-2">
              <Text className=" text-[#049B04] text-4xl" style={{fontFamily: 'Montserrat_700Bold' }}>Are you a</Text>
            </View>
            <LongButton text="FARMER / GUEST" color="white" route="/option"/>
            <LongButton text="AGRONOMIST" color="green" route="/option"/>
          </View>
        )
      }
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