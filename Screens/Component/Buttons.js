import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const Button = (props) => {
  return (
    <View > 
    <TouchableOpacity style={styles.button} onPress={() => props.onPress()}>
    <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
   
  button: {
    backgroundColor: "#e0e0e0",
    height: 30,
    width: 200,
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#FF002E",
    shadowColor: "#FF002E",
    elevation: 10,
  },
  text: {
    color: "black",
    alignSelf: "center",
  },
});

export default Button;
