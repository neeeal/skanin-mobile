import { 
  Text, 
  View, 
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";
import { useState, useEffect } from "react";

export default function Types() {
  const [activePage, setActivePage] = useState(1);
  const [data, setData] = useState([
    {id: 1, name:"Name",type:"type"},
    {id: 2, name:"Name",type:"type"},
    {id: 3, name:"Name",type:"type"},
    {id: 4, name:"Name2",type:"type"},
    {id: 5, name:"Name2",type:"type"},
    {id: 6, name:"Name2",type:"type"},
    {id: 7, name:"Name3",type:"type"},
    {id: 8, name:"Name3",type:"type"},
    {id: 9, name:"Name4",type:"type"},
    {id: 10, name:"Name5",type:"type"},
    {id: 11, name:"Name",type:"type"},
    {id: 12, name:"Name",type:"type"},
    {id: 13, name:"Name",type:"type"},
    {id: 14, name:"Name2",type:"type"},
    {id: 15, name:"Name2",type:"type"},
    {id: 16, name:"Name2",type:"type"},
    {id: 17, name:"Name3",type:"type"},
    {id: 18, name:"Name3",type:"type"},
    {id: 19, name:"Name4",type:"type"},
    {id: 20, name:"Name5",type:"type"},
    {id: 21, name:"Name5",type:"type"}
  ])
  const [displayedData, setDisplayedData] = useState([]);
  const getMaxPage = (items) => Math.floor(items.length/5);
  const getPages = (items) => {
    return (
      Array.from(
        { length: (getMaxPage(items)) / 1 + 1 },
        (value, index) => 1 + index * 1
        )
    )
  }
  const [pages, setPages] = useState(getPages(data))

  const imageWidth = parseInt(Dimensions.get('window').width / 5);

  const nextPage = () => {
    setActivePage(currentPage => currentPage === getMaxPage(data)? currentPage : currentPage + 1)
  }
  
  const previousPage = () => {
    setActivePage(currentPage => currentPage === 0 ? currentPage : currentPage - 1)
  }

  const handlePress = (buttonIndex) => {
    setActivePage(buttonIndex);
  };

  const goBack = () => {
    router.back();
  }
  useEffect(() => {
    // Calculate the start and end indices based on the active button
    const startIndex = (activePage) * 5;
    const endIndex = startIndex + 5;

    // Update the displayed data
    setDisplayedData(data.slice(startIndex, endIndex));
    // setPages
    // TODO: Add filter to display only three pages
  }, [activePage]);

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

  <View className="flex w-full h-full justify-center  ">

    <View className="flex mt-16 ">
    <View className="flex px-6 pb-6">
      <Text className="text-4xl" style={{fontFamily: 'Montserrat_700Bold'}}>Grain Gallery</Text>
    </View>

    <View className="flexk px-6 min-h-[66%]">
      {displayedData.map((item, index)=>(
        <TouchableOpacity key={item.id} className=" min-h-[10%] mb-6 flex-row rounded-2xl bg-[#D7DFC9]">
          <View style={{ width: imageWidth, height: imageWidth}} className="rounded-2xl">
            <Image source={require("../../assets/images/splash.png")} style={{flex:1, width: undefined, height: undefined, borderRadius: 100}}/>
          </View>
          <View className="flex-col pl-8 justify-center">
            <Text className="text-[#049B04] text-2xl" style={{fontFamily: 'Montserrat_600SemiBold'}}>{item.name}</Text>
            <Text className="text-base" style={{fontFamily: 'Montserrat_400Regular'}}>{item.type}</Text>
          </View>
        </TouchableOpacity>        
      ))}

    </View>
  </View>

  <View className="flex-row justify-evenly px-8 pt-8 ">

    <TouchableOpacity onPress={previousPage} className="  rounded-xl bg-[#D9D9D9]">
      <Iconify
      icon="material-symbols-light:navigate-before"
      size={32}
      color={"#000000"}
      />
    </TouchableOpacity >   

    <View className="flex-row">
    {pages.map((item, index) => (
      <TouchableOpacity
        key={index}
        className={` flex justify-center px-3 mx-2 rounded-xl ${
          activePage === index ? "bg-[#049B04]" : "bg-[#D9D9D9]"
        }`}
        onPress={() => handlePress(index)}
      >
        <Text
          style={{
            color: activePage === index ? "white" : "black",
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    ))}
    </View>

    <TouchableOpacity onPress={nextPage} className=" rounded-xl bg-[#D9D9D9]">
        <Iconify
        icon="material-symbols-light:navigate-next"
        size={30}
        color={"#000000"}
        />
    </TouchableOpacity >  

  </View>

  </View>
</>
  )
}

// export default function Types() {
//   return (
//     // <View style={styles.container}>
//     // <View className="border border-black">
//     //   <Text className="font-bold">Types page!</Text>
//     //   <StatusBar style='auto' />
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });