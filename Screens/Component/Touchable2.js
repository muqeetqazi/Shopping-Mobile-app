import React from "react";
import { Text,TouchableOpacity,StyleSheet } from "react-native";
const Touchable2 = ({ navigation,title }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.container}>{title}</Text>
      </TouchableOpacity>
    );
  }
  
const styles=StyleSheet.create(
    {
        container:{
            fontSize:11,
            margin:10,
           marginLeft:210
        }
    }
)
export default Touchable2;
