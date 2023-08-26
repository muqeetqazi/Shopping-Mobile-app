import React from 'react';
import { View, Image, StyleSheet,TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import Bottom from './Bottom';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const BottomTab = () => {
  return (
    
    <View  style={styles.container}>

  <ImageBackground
  >
  <Bottom/>
<View style={styles.comp}> 
  <TouchableOpacity>
    <Image source={require('../../assets/icon1.png')} />
    
  </TouchableOpacity>

  <TouchableOpacity>
    <Image source={require('../../assets/icon2.png')} />
    
  </TouchableOpacity>
  
  <TouchableOpacity>
    <Image source={require('../../assets/icon3.png')} />
    
  </TouchableOpacity>
  
  <TouchableOpacity>
    <Image source={require('../../assets/icon4.png')} />
    
  </TouchableOpacity>
  </View>
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
    marginBottom:0,
    
  },
  image: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom:0,
    marginRight:0,
    marginLeft:-40,
    alignItems: 'center',
  },
  comp:{
   // position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent:'space-evenly',
    justifyContent:'flex-end',
    justifyContent:'flex-start',
    justifyContent:'center'
  }
});

export default BottomTab;
/*<Image
  style={styles.image}
  source={require('../../assets/bot.png')} // Replace with your image path
  resizeMode="contain"

  />*/