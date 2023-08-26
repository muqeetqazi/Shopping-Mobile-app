import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Cart = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#D5DFEB','#FFFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
   
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  gradient: {
    width: 95,
    height: 90,
    borderRadius: 20,
    alignContent:'center',
    justifyContent:'center',
   
  
    borderColor: "#0000",
    shadowColor: "black",
    elevation: 10,
  },

});

export default Cart;
