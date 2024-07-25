import { useState, useEffect } from 'react';
import { 
  Text, 
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  SafeAreaView
} from 'react-native';
import { router } from 'expo-router';
import { Iconify } from "react-native-iconify";
import make_request from '../../helpers/url_server';
import { GET_HOME_DATA } from '../../helpers/urls';
import { useSession } from '../../ctx';
import { useIsFocused } from '@react-navigation/native';

export default function Index() {
  const imageWidth = parseInt(Dimensions.get('window').width / 2);
  const screenHeight = parseInt(Dimensions.get('window').height);
  const { session } = useSession();
  const isFocused = useIsFocused();
  
  const [isLoading, setIsLoading] = useState(false);
  const [recentScans, setRecentScans] = useState([]);

  const [grainGallery, setGrainGallery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!session || !session.token || !session.userId) {
        Alert.alert("Error", "Session is invalid. Please logout and log in again.");
        return;
      }

      setIsLoading(true);
      
      try {
        const response = await make_request({
          relative_url: GET_HOME_DATA,
          HEADERS: { 
            'Authorization': `Bearer ${session.token}`,
            'User-Id': session.userId,
          },
          method: 'GET',
        });
        
        console.log("finished");
        console.log('retrieval successful:', response);
        
        // Assuming response.data is in the expected format
        setRecentScans(response.data.history);
        
        setGrainGallery(response.data.types);

      } catch (err) {
        console.error("Error during retrieval:", err);
        Alert.alert("Error", "Retrieval failed.");
      } finally {
        setIsLoading(false);
      }
    };
    
    if (isFocused) {
    fetchData();
    }
  }, [isFocused]); // Add dependencies if session or other dependencies change

  return (
    <SafeAreaView className="flex w-[100%] h-[100%] ">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <>
          <View className="flex flex-grow ">
            <View className="flex-grow" style={{ height: parseInt(screenHeight * 0.6) }}> 
              <ImageBackground className="flex-1" source={require("../../assets/images/Image (4).png")}>
                <View className="pl-4 pr-2 flex-1 justify-end items-left">
                  <Text style={{color:"#049B04", fontFamily: 'Montserrat_400Regular'}} className=" text-3xl font-bold -mb-2">Worry Less, Grow More:</Text>
                  <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-white text-3xl font-bold">Your Rice Stress Classifier</Text>
                  <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-white pb-2 text-xs">Say goodbye to field worries with spot on stress analysis, for</Text>
                  <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-white pb-4 text-xs">confident and flourishing fields.</Text>
                </View>
              </ImageBackground>
            </View>
            { 
              isLoading ? <ActivityIndicator size="large" color="#0000ff" /> :
              <>
                <View className="p-4 pb-2">
                  <View className="flex-row justify-between">
                    <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-3xl font-bold">Recent Scans</Text>
                    <TouchableOpacity onPress={() => router.replace("/history")} className="justify-center">
                      <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-xs">View all</Text>
                    </TouchableOpacity>
                  </View>
                  <View className="border-t-2 max-w-[18%] border-green-600 p-1"></View>
                  <ScrollView horizontal={true} className="flex-row">
                    {recentScans.map(scan => (
                      <TouchableOpacity key={scan._id} onPress={() => router.push({pathname:`/dataDisplay`, params:scan})} className="pl-2">
                        <Image className="rounded-xl ml-2" style={{ width: imageWidth, height: imageWidth }} source={{uri: `data:image/png;base64,${scan.rice_image}`}}></Image>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
                <View className="p-4 pt-0">
                  <View className="flex-row justify-between">
                    <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-3xl font-bold">Stress Types</Text>
                    <TouchableOpacity onPress={() => router.replace("/types")} className="justify-center">
                      <Text style={{fontFamily: 'Montserrat_400Regular'}} className="text-xs">View all</Text>
                    </TouchableOpacity>
                  </View>
                  <View className="border-t-2 max-w-[18%] border-green-600 p-1"></View>
                  <ScrollView horizontal={true} className="flex-row">
                    {grainGallery.map(grain => (
                      <TouchableOpacity key={grain._id} onPress={() => router.push({pathname:`/dataDisplay`, params:grain})} className="pl-2">
                        <Image className="rounded-xl ml-2" style={{ width: imageWidth, height: imageWidth }} source={{uri: `data:image/png;base64,${grain.rice_image}`}}></Image>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </>
            }
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
}
