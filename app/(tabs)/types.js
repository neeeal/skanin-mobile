import { 
  Text, 
  View, 
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  Image,
  Alert,
  SafeAreaView
} from "react-native";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import make_request from '../../helpers/url_server';
import { GET_TYPES } from '../../helpers/urls';
import { useSession } from '../../ctx';

export default function Types() {
  const { session } = useSession();
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [activeData, setActiveData] = useState(null);
  const [displayedData, setDisplayedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMaxPage = (items) => Math.ceil(items.length / 5);
  const getPages = (items) => (
    Array.from(
      { length: getMaxPage(items) },
      (value, index) => 1 + index
    )
  );

  const [pages, setPages] = useState(getPages(data));

  const imageWidth = parseInt(Dimensions.get('window').width / 5);
  const imageWidthBig = parseInt(Dimensions.get('window').width / 2);

  const nextPage = () => {
    setActivePage((currentPage) => currentPage >= getMaxPage(data) ? currentPage : currentPage + 1);
  };

  const previousPage = () => {
    setActivePage((currentPage) => currentPage <= 1 ? currentPage : currentPage - 1);
  };

  const handlePress = (itemNumber) => {
    setActivePage(itemNumber);
  };

  const goBack = () => {
    router.back();
    setActivePage(1)
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!session || !session.token || !session.userId) {
        Alert.alert("Error", "Session is invalid. Please logout and log in again.");
        return;
      }

      setIsLoading(true);

      try {
        const response = await make_request({
          relative_url: GET_TYPES,
          HEADERS: { 
            'Authorization': `Bearer ${session.token}`,
            'User-Id': session.userId,
          },
          method: 'GET',
        });

        console.log("retrieval successful:", response);
        if (response.data && response.data.types) {
          setData(response.data.types);
        }
      } catch (err) {
        console.error("Error during retrieval:", err);
        Alert.alert("Error", "Retrieval failed.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [session]);

  useEffect(() => {
    if (!data) return;
    
    const startIndex = (activePage - 1) * 5;
    const endIndex = startIndex + 5;

    const maxPage = getMaxPage(data);
    let displayedPages = [];

    if (activePage <= 1) {
      displayedPages = maxPage >= 3 ? [activePage, activePage + 1, activePage + 2] : [1, 2];
    } else if (activePage >= maxPage) {
      displayedPages = maxPage >= 3 ? [maxPage - 2, maxPage - 1, maxPage] : [1, 2];
    } else {
      displayedPages = maxPage >= 3 ? [activePage - 1, activePage, activePage + 1] : [1, 2];
    }

    setDisplayedData(data.slice(startIndex, endIndex > data.length ? data.length : endIndex));
    setPages(displayedPages);

  }, [activePage, data]);

  const useResetActiveData = () => setActiveData(null);

  if (activeData) {
    return (
      <SafeAreaView className="flex w-[100%] h-[100%] ">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableOpacity
            className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start absolute px-4"
            onPress={useResetActiveData}
          >
            <Iconify
              icon="weui:back-outlined"
              size={36}
              color={"#000000"}
            />
          </TouchableOpacity>
  
          <View className="flex justify-center items-center w-full h-full mt-[15%]">
            <View className="mb-8">
              <Image 
                source={{uri: `data:image/png;base64,${activeData.rice_image}`}} 
                style={{ width: '100%', height: undefined, aspectRatio: 1 }}
                resizeMode="contain"
              />
            </View>
  
            <View className="px-8">
              <View className="pb-4">
                <Text className="text-3xl" style={{ fontFamily: 'Montserrat_700Bold' }}>{activeData.stress_name}</Text>
                <Text className="underline text-xl" style={{ fontFamily: 'Montserrat_300Light' }}>{activeData.stress_type}</Text>
              </View>
  
              <View className="pb-4">
                <Text className="text-3xl text-[#049B04]" style={{ fontFamily: 'Montserrat_700Bold' }}>What it does</Text>
                <Text className="text-sm" style={{ fontFamily: 'Montserrat_400Regular' }}>{activeData.description}</Text>
              </View>
  
              <View className="pb-4">
                <Text className="text-3xl text-[#049B04]" style={{ fontFamily: 'Montserrat_700Bold' }}>Recommendation</Text>
                <Text className="text-sm" style={{ fontFamily: 'Montserrat_400Regular' }}>{activeData.recommendation}</Text>
              </View>
  
              <View className="py-8"></View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

  return (
    <>
      <TouchableOpacity
        className="flex mx-2 mt-[13%] mb-[8%] p-2 self-start absolute px-4"
        onPress={goBack}
      >
        <Iconify
          icon="weui:back-outlined"
          size={36}
          color={"#000000"}
        />
      </TouchableOpacity>

      <View className="flex w-full h-full justify-center ">
        <View className="flex mt-16 min-h-[68%]">
          <View className="flex px-6 pb-6">
            <Text className="text-4xl" style={{ fontFamily: 'Montserrat_700Bold' }}>Stress Types</Text>
          </View>

          {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> :
            <View className="flex px-6 min-h-[66%]">
              {displayedData.map((item, index) => (
                <TouchableOpacity key={index} className="min-h-[10%] mb-6 flex-row rounded-2xl bg-[#D7DFC9]" onPress={() => setActiveData(item)}>
                  <View style={{ width: imageWidth, height: imageWidth }} className="rounded-2xl ">
                    <Image                 
                      source={{uri: `data:image/png;base64,${item.rice_image}`}} 
                      resizeMode="contain" style={{ flex: 1, width: undefined, height: undefined}} 
                      className=" rounded-l-2xl"
                      />
                  </View>
                  <View className="flex-col pl-4 justify-center">
                    <Text className="text-[#049B04] text-xl" style={{ fontFamily: 'Montserrat_600SemiBold' }}>{item.stress_name}</Text>
                    <Text className="text-xs" style={{ fontFamily: 'Montserrat_400Regular' }}>{item.stress_type}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          }
        </View>

        <View className="flex-row justify-evenly px-8 pt-8">
          <TouchableOpacity onPress={previousPage} className={`rounded-xl bg-[#D9D9D9] ${activePage === 1 ? "bg-[#B0B0B055]" : "bg-[#D9D9D9]"}`}>
            <Iconify
              icon="material-symbols-light:navigate-before"
              size={32}
              color={activePage === 1 ? "#ffffff" : "#000000"}
            />
          </TouchableOpacity>

          <View className="flex-row">
            {pages.map((item, index) => (
              <TouchableOpacity
                key={index}
                className={`flex justify-center px-3 mx-2 rounded-xl ${
                  activePage === item ? "bg-[#049B04]" : "bg-[#D9D9D9]"
                }`}
                onPress={() => handlePress(item)}
              >
                <Text style={{ color: activePage === item ? "white" : "black" }}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity onPress={nextPage} className={`rounded-xl bg-[#D9D9D9] ${activePage === getMaxPage(data) ? "bg-[#B0B0B055]" : "bg-[#D9D9D9]"}`}>
            <Iconify
              icon="material-symbols-light:navigate-next"
              size={30}
              color={activePage === getMaxPage(data) ? "#ffffff" : "#000000"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}
