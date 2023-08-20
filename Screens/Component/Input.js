// Input.js
import React from 'react';
import { View, TextInput, ImageBackground, StyleSheet ,Image} from 'react-native';

// Import your curved gradient image
import curvedGradientImage from '../../assets/d.png';
import { SafeAreaView } from 'react-native-safe-area-context';

const Input = (props) => {
  return (
   <View style={styles.container}>
      
      <ImageBackground   
        source={curvedGradientImage}
        style={styles.backgroundImage}
        resizeMethod='contain'
        

        
      >
        <TextInput
          placeholder={props.placeholder}
          onChangeText={(t) => props.onChangeText(t)}
          style={styles.textInput}
        />
      </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom:10
  },
  backgroundImage: {
  
    height:66,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    marginLeft:20,
    //marginRight:190,
    alignItems: 'center',

  },
  textInput: {
    height: 55,
    width: '80%', // Adjust the width to control text length
    borderRadius: 20,
    paddingLeft: 10,
    marginLeft: '10%', // Adjust this value to control the left spacing
    marginRight: '10%', // Adjust this value to control the right spacing
    backgroundColor: 'transparent',
    color: 'black',
  },
});

export default Input;
