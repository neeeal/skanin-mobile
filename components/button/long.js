import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const LongButton = ({route, color, text}) =>{
    return(
        <TouchableOpacity 
        onPress={() => router.push(route)} 
        className={ color==="white" ? "bg-white rounded-3xl py-3 my-2 w-[80%] shadow" : "bg-[#049B04] rounded-3xl py-3 my-2 w-[80%]"}
        style={styles.shadow}>
          <Text className={ color==="white" ? " text-[#086608] text-center " : " text-white text-center"} style={{fontFamily: 'Montserrat_400Regular'}}>{text}</Text>
        </TouchableOpacity>
    )
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

export default LongButton;