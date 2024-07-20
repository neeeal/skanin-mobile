import { 
  Text, 
  View, 
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image
} from "react-native";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";
import { useState, useEffect } from "react";

export default function History() {
  const [data, setData] = useState([
    {level: 2, id: 1, name:"Name",type:"type", image:require("../../assets/images/adaptive-icon.png"), description:`Tungro disease viruses are transmitted from one plant to another by leafhoppers that feed on tungro-infected plants. The most efficient vector is the green leafhopper.
Leafhoppers can acquire the viruses from any part of the infected plant by feeding on it, even for a short time. It can, then, immediately transmit the viruses to other plants within 5−7 days. The viruses do not remain in the leafhopper's body unless it feeds again on an infected plant and re-acquires the viruses.
Tungro infection can occur during all growth stages of the rice plant. It is most frequently seen during the vegetative phase. Plants are most vulnerable at tillering stage.
Tungro incidence depends on the availability of the virus sources and vector population. Other than infected rice plants in the farmer's field, other primary sources for tungro, include:
stubble of previous crops
new growth from infected stubbles that had not been properly plowed under and harrowed effectively
volunteer rice
infected plants in nearby rice fields
Seedlings raised in nurseries or seedbeds can also be infected with Tungro prior to transplanting and can be a primary source of virus.
Transplanting seedlings from nurseries in tungro-infected areas has also shown to increase infection rates in the field, particularly, in cases where seedbed is in a tungro-endemic area or when the nursery duration is 5−6 weeks.
However, this is not believed to be a very strong mechanism in initiating epidemics, because the competitiveness of tungro-infected seedlings is low; they can die rapidly after transplanting.`
, descriptionSource: "http://www.knowledgebank.irri.org/training/fact-sheets/pest-management/insects/item/planthopper", 
recommendation: `1. Preventing Outbreaks:

* Weed Control: Remove weeds from the field and surrounding areas to minimize habitat for brown plant hoppers (BPH).
* Avoid Indiscriminate Insecticide Use: Prevent destroying natural enemies of BPH by avoiding excessive insecticide application.
* Use Resistant Varieties: Opt for resistant rice varieties; consult local agricultural authorities for updated lists.

2.Monitoring and Control Measures:

* Critical Threshold: Act if BPH density exceeds 1 BPH per stem; monitor regularly for increases in numbers.
* Monitoring Methods: Check seedbeds or fields regularly for BPH, using direct observation or light traps at night.
* Mechanical & Physical Measures: Flood seedbeds briefly or sweep them with a net to control BPH.
* Biological Control: Encourage natural enemies of BPH, such as water striders, mirid bugs, spiders, and egg parasitoids, to limit BPH population growth.
* Chemical Control: Apply insecticides in the seedbed only if specific conditions are met, such as high BPH density, outnumbering natural enemies, and when flooding isn't feasible.`
, recommendationSource: "http://www.knowledgebank.irri.org/training/fact-sheets/pest-management/insects/item/planthopper"},
    {level:5 , id: 2, name:"Name",type:"type", image:require("../../assets/images/adaptive-icon.png"), description:`Tungro disease viruses are transmitted from one plant to another by leafhoppers that feed on tungro-infected plants. The most efficient vector is the green leafhopper.
Leafhoppers can acquire the viruses from any part of the infected plant by feeding on it, even for a short time. It can, then, immediately transmit the viruses to other plants within 5−7 days. The viruses do not remain in the leafhopper's body unless it feeds again on an infected plant and re-acquires the viruses.
Tungro infection can occur during all growth stages of the rice plant. It is most frequently seen during the vegetative phase. Plants are most vulnerable at tillering stage.
Tungro incidence depends on the availability of the virus sources and vector population. Other than infected rice plants in the farmer's field, other primary sources for tungro, include:
stubble of previous crops
new growth from infected stubbles that had not been properly plowed under and harrowed effectively
volunteer rice
infected plants in nearby rice fields
Seedlings raised in nurseries or seedbeds can also be infected with Tungro prior to transplanting and can be a primary source of virus.
Transplanting seedlings from nurseries in tungro-infected areas has also shown to increase infection rates in the field, particularly, in cases where seedbed is in a tungro-endemic area or when the nursery duration is 5−6 weeks.
However, this is not believed to be a very strong mechanism in initiating epidemics, because the competitiveness of tungro-infected seedlings is low; they can die rapidly after transplanting.`
, descriptionSource: "http://www.knowledgebank.irri.org/training/fact-sheets/pest-management/insects/item/planthopper", 
recommendation: `1. Preventing Outbreaks:

* Weed Control: Remove weeds from the field and surrounding areas to minimize habitat for brown plant hoppers (BPH).
* Avoid Indiscriminate Insecticide Use: Prevent destroying natural enemies of BPH by avoiding excessive insecticide application.
* Use Resistant Varieties: Opt for resistant rice varieties; consult local agricultural authorities for updated lists.

2.Monitoring and Control Measures:

* Critical Threshold: Act if BPH density exceeds 1 BPH per stem; monitor regularly for increases in numbers.
* Monitoring Methods: Check seedbeds or fields regularly for BPH, using direct observation or light traps at night.
* Mechanical & Physical Measures: Flood seedbeds briefly or sweep them with a net to control BPH.
* Biological Control: Encourage natural enemies of BPH, such as water striders, mirid bugs, spiders, and egg parasitoids, to limit BPH population growth.
* Chemical Control: Apply insecticides in the seedbed only if specific conditions are met, such as high BPH density, outnumbering natural enemies, and when flooding isn't feasible.`
, recommendationSource: "http://www.knowledgebank.irri.org/training/fact-sheets/pest-management/insects/item/planthopper"},
    {level: 2, id: 3, name:"Name",type:"type", image:require("../../assets/images/adaptive-icon.png"), description:`Tungro disease viruses are transmitted from one plant to another by leafhoppers that feed on tungro-infected plants. The most efficient vector is the green leafhopper.
Leafhoppers can acquire the viruses from any part of the infected plant by feeding on it, even for a short time. It can, then, immediately transmit the viruses to other plants within 5−7 days. The viruses do not remain in the leafhopper's body unless it feeds again on an infected plant and re-acquires the viruses.
Tungro infection can occur during all growth stages of the rice plant. It is most frequently seen during the vegetative phase. Plants are most vulnerable at tillering stage.
Tungro incidence depends on the availability of the virus sources and vector population. Other than infected rice plants in the farmer's field, other primary sources for tungro, include:
stubble of previous crops
new growth from infected stubbles that had not been properly plowed under and harrowed effectively
volunteer rice
infected plants in nearby rice fields
Seedlings raised in nurseries or seedbeds can also be infected with Tungro prior to transplanting and can be a primary source of virus.
Transplanting seedlings from nurseries in tungro-infected areas has also shown to increase infection rates in the field, particularly, in cases where seedbed is in a tungro-endemic area or when the nursery duration is 5−6 weeks.
However, this is not believed to be a very strong mechanism in initiating epidemics, because the competitiveness of tungro-infected seedlings is low; they can die rapidly after transplanting.`
, descriptionSource: "http://www.knowledgebank.irri.org/training/fact-sheets/pest-management/insects/item/planthopper", 
recommendation: `1. Preventing Outbreaks:

* Weed Control: Remove weeds from the field and surrounding areas to minimize habitat for brown plant hoppers (BPH).
* Avoid Indiscriminate Insecticide Use: Prevent destroying natural enemies of BPH by avoiding excessive insecticide application.
* Use Resistant Varieties: Opt for resistant rice varieties; consult local agricultural authorities for updated lists.

2.Monitoring and Control Measures:

* Critical Threshold: Act if BPH density exceeds 1 BPH per stem; monitor regularly for increases in numbers.
* Monitoring Methods: Check seedbeds or fields regularly for BPH, using direct observation or light traps at night.
* Mechanical & Physical Measures: Flood seedbeds briefly or sweep them with a net to control BPH.
* Biological Control: Encourage natural enemies of BPH, such as water striders, mirid bugs, spiders, and egg parasitoids, to limit BPH population growth.
* Chemical Control: Apply insecticides in the seedbed only if specific conditions are met, such as high BPH density, outnumbering natural enemies, and when flooding isn't feasible.`
, recommendationSource: "http://www.knowledgebank.irri.org/training/fact-sheets/pest-management/insects/item/planthopper"},
    {level: 2, id: 4, name:"Name2",type:"type", image:require("../../assets/images/adaptive-icon.png"), description:`Tungro disease viruses are transmitted from one plant to another by leafhoppers that feed on tungro-infected plants. The most efficient vector is the green leafhopper.
Leafhoppers can acquire the viruses from any part of the infected plant by feeding on it, even for a short time. It can, then, immediately transmit the viruses to other plants within 5−7 days. The viruses do not remain in the leafhopper's body unless it feeds again on an infected plant and re-acquires the viruses.
Tungro infection can occur during all growth stages of the rice plant. It is most frequently seen during the vegetative phase. Plants are most vulnerable at tillering stage.
Tungro incidence depends on the availability of the virus sources and vector population. Other than infected rice plants in the farmer's field, other primary sources for tungro, include:
stubble of previous crops
new growth from infected stubbles that had not been properly plowed under and harrowed effectively
volunteer rice
infected plants in nearby rice fields
Seedlings raised in nurseries or seedbeds can also be infected with Tungro prior to transplanting and can be a primary source of virus.
Transplanting seedlings from nurseries in tungro-infected areas has also shown to increase infection rates in the field, particularly, in cases where seedbed is in a tungro-endemic area or when the nursery duration is 5−6 weeks.
However, this is not believed to be a very strong mechanism in initiating epidemics, because the competitiveness of tungro-infected seedlings is low; they can die rapidly after transplanting.`
, descriptionSource: "http://www.knowledgebank.irri.org/training/fact-sheets/pest-management/insects/item/planthopper", 
recommendation: `1. Preventing Outbreaks:

* Weed Control: Remove weeds from the field and surrounding areas to minimize habitat for brown plant hoppers (BPH).
* Avoid Indiscriminate Insecticide Use: Prevent destroying natural enemies of BPH by avoiding excessive insecticide application.
* Use Resistant Varieties: Opt for resistant rice varieties; consult local agricultural authorities for updated lists.

2.Monitoring and Control Measures:

* Critical Threshold: Act if BPH density exceeds 1 BPH per stem; monitor regularly for increases in numbers.
* Monitoring Methods: Check seedbeds or fields regularly for BPH, using direct observation or light traps at night.
* Mechanical & Physical Measures: Flood seedbeds briefly or sweep them with a net to control BPH.
* Biological Control: Encourage natural enemies of BPH, such as water striders, mirid bugs, spiders, and egg parasitoids, to limit BPH population growth.
* Chemical Control: Apply insecticides in the seedbed only if specific conditions are met, such as high BPH density, outnumbering natural enemies, and when flooding isn't feasible.`
, recommendationSource: "http://www.knowledgebank.irri.org/training/fact-sheets/pest-management/insects/item/planthopper"},
    {level: 2, id: 5, name:"Name2",type:"type", image:require("../../assets/images/adaptive-icon.png"), description:`Tungro disease viruses are transmitted from one plant to another by leafhoppers that feed on tungro-infected plants. The most efficient vector is the green leafhopper.
Leafhoppers can acquire the viruses from any part of the infected plant by feeding on it, even for a short time. It can, then, immediately transmit the viruses to other plants within 5−7 days. The viruses do not remain in the leafhopper's body unless it feeds again on an infected plant and re-acquires the viruses.
Tungro infection can occur during all growth stages of the rice plant. It is most frequently seen during the vegetative phase. Plants are most vulnerable at tillering stage.
Tungro incidence depends on the availability of the virus sources and vector population. Other than infected rice plants in the farmer's field, other primary sources for tungro, include:
stubble of previous crops
new growth from infected stubbles that had not been properly plowed under and harrowed effectively
volunteer rice
infected plants in nearby rice fields
Seedlings raised in nurseries or seedbeds can also be infected with Tungro prior to transplanting and can be a primary source of virus.
Transplanting seedlings from nurseries in tungro-infected areas has also shown to increase infection rates in the field, particularly, in cases where seedbed is in a tungro-endemic area or when the nursery duration is 5−6 weeks.
However, this is not believed to be a very strong mechanism in initiating epidemics, because the competitiveness of tungro-infected seedlings is low; they can die rapidly after transplanting.`
, descriptionSource: "http://www.knowledgebank.irri.org/training/fact-sheets/pest-management/insects/item/planthopper", 
recommendation: `1. Preventing Outbreaks:

* Weed Control: Remove weeds from the field and surrounding areas to minimize habitat for brown plant hoppers (BPH).
* Avoid Indiscriminate Insecticide Use: Prevent destroying natural enemies of BPH by avoiding excessive insecticide application.
* Use Resistant Varieties: Opt for resistant rice varieties; consult local agricultural authorities for updated lists.

2.Monitoring and Control Measures:

* Critical Threshold: Act if BPH density exceeds 1 BPH per stem; monitor regularly for increases in numbers.
* Monitoring Methods: Check seedbeds or fields regularly for BPH, using direct observation or light traps at night.
* Mechanical & Physical Measures: Flood seedbeds briefly or sweep them with a net to control BPH.
* Biological Control: Encourage natural enemies of BPH, such as water striders, mirid bugs, spiders, and egg parasitoids, to limit BPH population growth.
* Chemical Control: Apply insecticides in the seedbed only if specific conditions are met, such as high BPH density, outnumbering natural enemies, and when flooding isn't feasible.`
, recommendationSource: "http://www.knowledgebank.irri.org/training/fact-sheets/pest-management/insects/item/planthopper"},
    {level: 2, id: 6, name:"Name2",type:"type", image:require("../../assets/images/adaptive-icon.png"), description:`Tungro disease viruses are transmitted from one plant to another by leafhoppers that feed on tungro-infected plants. The most efficient vector is the green leafhopper.
Leafhoppers can acquire the viruses from any part of the infected plant by feeding on it, even for a short time. It can, then, immediately transmit the viruses to other plants within 5−7 days. The viruses do not remain in the leafhopper's body unless it feeds again on an infected plant and re-acquires the viruses.
Tungro infection can occur during all growth stages of the rice plant. It is most frequently seen during the vegetative phase. Plants are most vulnerable at tillering stage.
Tungro incidence depends on the availability of the virus sources and vector population. Other than infected rice plants in the farmer's field, other primary sources for tungro, include:
stubble of previous crops
new growth from infected stubbles that had not been properly plowed under and harrowed effectively
volunteer rice
infected plants in nearby rice fields
Seedlings raised in nurseries or seedbeds can also be infected with Tungro prior to transplanting and can be a primary source of virus.
Transplanting seedlings from nurseries in tungro-infected areas has also shown to increase infection rates in the field, particularly, in cases where seedbed is in a tungro-endemic area or when the nursery duration is 5−6 weeks.
However, this is not believed to be a very strong mechanism in initiating epidemics, because the competitiveness of tungro-infected seedlings is low; they can die rapidly after transplanting.`
, descriptionSource: "http://www.knowledgebank.irri.org/training/fact-sheets/pest-management/insects/item/planthopper", 
recommendation: `1. Preventing Outbreaks:

* Weed Control: Remove weeds from the field and surrounding areas to minimize habitat for brown plant hoppers (BPH).
* Avoid Indiscriminate Insecticide Use: Prevent destroying natural enemies of BPH by avoiding excessive insecticide application.
* Use Resistant Varieties: Opt for resistant rice varieties; consult local agricultural authorities for updated lists.

2.Monitoring and Control Measures:

* Critical Threshold: Act if BPH density exceeds 1 BPH per stem; monitor regularly for increases in numbers.
* Monitoring Methods: Check seedbeds or fields regularly for BPH, using direct observation or light traps at night.
* Mechanical & Physical Measures: Flood seedbeds briefly or sweep them with a net to control BPH.
* Biological Control: Encourage natural enemies of BPH, such as water striders, mirid bugs, spiders, and egg parasitoids, to limit BPH population growth.
* Chemical Control: Apply insecticides in the seedbed only if specific conditions are met, such as high BPH density, outnumbering natural enemies, and when flooding isn't feasible.`
, recommendationSource: "http://www.knowledgebank.irri.org/training/fact-sheets/pest-management/insects/item/planthopper"}
  ])
  const [activePage, setActivePage] = useState(1);
  const [activeData, setActiveData] = useState(null);
  const [displayedData, setDisplayedData] = useState([]);
  const getMaxPage = (items) => Math.ceil(items.length/5);
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
  const imageWidthBig = parseInt(Dimensions.get('window').width / 2);

  const nextPage = () => {
    setActivePage(currentPage => currentPage >= getMaxPage(data)? currentPage : currentPage + 1)
  }
  
  const previousPage = () => {
    setActivePage(currentPage => currentPage <= 1 ? currentPage : currentPage - 1)
  }

  const handlePress = (itemNumber) => {
    setActivePage(itemNumber);
  };

  const goBack = () => {
    router.back();
  }
  useEffect(() => {
    // Calculate the start and end indices based on the active button
    const startIndex = (activePage-1) * 5;
    const endIndex = startIndex + 5;

    // Update the displayed data
    setDisplayedData(data.slice(startIndex, endIndex > data.length ? data.length : endIndex));

    const maxPage = getMaxPage(data)

    let displayedPages = []

    if (activePage <= 1){
      displayedPages = maxPage >= 3 ? [ activePage, activePage + 1 ,activePage + 2 ]: [1, 2]
    } else if (activePage >= maxPage){
      displayedPages = maxPage >= 3 ? [maxPage - 2, maxPage - 1, maxPage] : [1, 2]
    } else{
      displayedPages = maxPage >= 3 ? [ activePage - 1, activePage, activePage + 1] : [1, 2]
    }
    setPages(displayedPages);
  }, [activePage, data]);
  
  const useResetActiveData = ()=>setActiveData(null);

  if (activeData){
    return (
      <>
        <ScrollView contentContainerStyle={{ flexGrow: 1}}>

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
            <Image source={activeData.image} style={{ maxWidth:parseInt(Dimensions.get('window').width)}}/>
          </View>

          <View className="px-8">
            <View className="pb-4 flex-row justify-between">
              <View className="flex">
                <Text className="text-3xl" style={{fontFamily: 'Montserrat_700Bold'}}>{activeData.name}</Text>
                <Text className=" underline text-xl" style={{fontFamily: 'Montserrat_300Light'}}>{activeData.type}</Text>
              </View>
              <View className="flex-row items-center">
                {Array.from(
                  { length: 5 },
                  (value, index) => 1 + index * 1
                  ).map((item, index)=>
                    <Iconify
                    key={index}
                    icon="mdi:fire"
                    size={32}
                    color={ index>=activeData.level ? "#000000" : "#ff9800"}
                    style={{marginHorizontal: -3}}
                    />
                )}
              </View>
              </View>

            <View className="pb-4">
              <Text className="text-3xl text-[#049B04]" style={{fontFamily: 'Montserrat_700Bold'}}>What it does</Text>
              <Text className="text-sm" style={{fontFamily: 'Montserrat_400Regular'}}>{activeData.description}</Text>
            </View>

            <View className="pb-4">
              <Text className="text-3xl text-[#049B04]" style={{fontFamily: 'Montserrat_700Bold'}}>Recommendation</Text>
              <Text className="text-sm" tyle={{fontFamily: 'Montserrat_400Regular'}}>{activeData.recommendation}</Text>
            </View>

            <View className="py-8">
              
            </View>
          </View>

        </View>
      </ScrollView>
</>
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

  <View className="flex w-full h-full justify-center  ">

    <View className="flex mt-16 ">
    <View className="flex px-6 pb-6">
      <Text className="text-4xl" style={{fontFamily: 'Montserrat_700Bold'}}>History</Text>
    </View>

    <View className="flexk px-6 min-h-[66%]">
      {displayedData.map((item, index)=>(
        <TouchableOpacity key={index} className=" min-h-[10%] mb-6 flex-row rounded-2xl bg-[#D7DFC9]" onPress={()=>setActiveData(item)}>
          <View style={{ width: imageWidth, height: imageWidth}} className="rounded-2xl">
            <Image source={item.image} style={{flex:1, width: undefined, height: undefined, borderRadius: 100}}/>
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

  <TouchableOpacity onPress={previousPage} className={` rounded-xl bg-[#D9D9D9] ${ activePage===1 ? "bg-[#B0B0B055]" : "bg-[#D9D9D9]"}`}>
      <Iconify
      icon="material-symbols-light:navigate-before"
      size={32}
      color={ activePage===1 ? "#ffffff" : "#000000"}
      />
    </TouchableOpacity >   

    <View className="flex-row">
    {pages.map((item, index) => (
      <TouchableOpacity
        key={index}
        className={` flex justify-center px-3 mx-2 rounded-xl ${
          activePage === item ? "bg-[#049B04]" : "bg-[#D9D9D9]"
        }`}
        onPress={() => handlePress(item)}
      >
        <Text
          style={{
            color: activePage === item ? "white" : "black",
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    ))}
    </View>

    <TouchableOpacity onPress={nextPage} className={` rounded-xl bg-[#D9D9D9] ${ activePage===getMaxPage(data) ? "bg-[#B0B0B055]" : "bg-[#D9D9D9]"}`}>
        <Iconify
        icon="material-symbols-light:navigate-next"
        size={30}
        color={ activePage===getMaxPage(data) ? "#ffffff" : "#000000"}
        />
    </TouchableOpacity >  

  </View>

  </View>
</>
  )
}