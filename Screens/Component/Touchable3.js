import React from "react";
import { Text,TouchableOpacity,StyleSheet } from "react-native";
const Touchable3 = ({ navigation }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('forget')}>
        <Text style={styles.container}>Forget Password </Text>
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
export default Touchable3;
