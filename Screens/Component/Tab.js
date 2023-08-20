import React from 'react';
import { View, Image, StyleSheet,TouchableOpacity, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const BottomTab = () => {
  return (
    
    <View style={styles.container}>
      <ImageBackground
  style={styles.image}
  source={require('../../assets/bot.png')} // Replace with your image path
  resizeMode="contain"
>
  <TouchableOpacity>
    <Image source={require('../../assets/icon1.png')} />
    <Image source={require('../../assets/icon2.png')} />
    <Image source={require('../../assets/icon3.png')} />
    <Image source={require('../../assets/icon4.png')} />
    
  </TouchableOpacity>
</ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
});

export default BottomTab;
