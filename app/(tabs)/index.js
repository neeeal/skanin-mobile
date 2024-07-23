import { useState } from 'react';
import { 
  Text, 
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { router } from 'expo-router';
import { Iconify } from "react-native-iconify";

export default function Index() {
  const imageWidth = parseInt(Dimensions.get('window').width / 2);
  const screenHeight = parseInt(Dimensions.get('window').height);

  const [recentScans, setRecentScans] = useState([
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
  ]);

  const [grainGallery, setGrainGallery] = useState([
    {id: 1, name:"Name",type:"type", image:require("../../assets/images/adaptive-icon.png"), description:`Tungro disease viruses are transmitted from one plant to another by leafhoppers that feed on tungro-infected plants. The most efficient vector is the green leafhopper.
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
          {id: 2, name:"Name",type:"type", image:require("../../assets/images/adaptive-icon.png"), description:`Tungro disease viruses are transmitted from one plant to another by leafhoppers that feed on tungro-infected plants. The most efficient vector is the green leafhopper.
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
          {id: 3, name:"Name",type:"type", image:require("../../assets/images/adaptive-icon.png"), description:`Tungro disease viruses are transmitted from one plant to another by leafhoppers that feed on tungro-infected plants. The most efficient vector is the green leafhopper.
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
  ]);
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
                  <TouchableOpacity key={scan.id} onPress={() => router.push({pathname:`/dataDisplay`, params:scan})} className="pl-2">
                    <Image className="rounded-xl ml-2" style={{ width: imageWidth, height: imageWidth }} source={scan.image}></Image>
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
                  <TouchableOpacity key={grain.id} onPress={() => router.push({pathname:`/dataDisplay`, params:grain})} className="pl-2">
                    <Image className="rounded-xl ml-2" style={{ width: imageWidth, height: imageWidth }} source={grain.image}></Image>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
}
