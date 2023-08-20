import React from "react";
import { Text,TouchableOpacity,StyleSheet } from "react-native";
const Touchable = ({ navigation }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.container}>Already have an account?</Text>
      </TouchableOpacity>
    );
  }
  
const styles=StyleSheet.create(
    {
        container:{
            fontSize:11,
            margin:10,
           marginLeft:120,marginRight:100
        }
    }
)
export default Touchable;
