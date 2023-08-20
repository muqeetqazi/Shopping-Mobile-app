import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Logo = (props) => {
  return (
    <View>
      <Image
        style={styles.img}
        resizeMode="contain"
        source={require('../../assets/cart.png')}
      />
      <Text style={styles.text}>My Premium Cart</Text>
    </View>
  );

};


const styles = StyleSheet.create({
  img: {
    height: 120,
    width: 120,
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF002E',
    textShadowColor: '#E6084480',
    textShadowOffset: {
      height: 1,
      width: 1,
    },
  },
});

export default Logo;
