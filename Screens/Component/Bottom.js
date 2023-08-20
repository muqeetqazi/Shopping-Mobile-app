import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Bottom = () => {
  return (
    <View style={styles.container}>
      <Image
      style={styles.image}
        source={require('../../assets/bot.png')} // Replace with your image path
        resizeMode="contain"
        
      />
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

export default Bottom;
