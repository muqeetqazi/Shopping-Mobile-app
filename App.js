import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import HomeScreen from './Screens/HomeScreen';
import ForgetPassword from './Screens/ForgetPassword';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth"
const Stack = createNativeStackNavigator();
export default function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true)
      alert('Sign in')
      const uid = user.uid;

    } else {
     
      setIsLoggedIn(false)
    }
  });
  const AuthStack = () => {
    return (
      
      <Stack.Navigator initialRouteName='Welcome'>

        <Stack.Screen name='Welcome' options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name='Signup' options={{ headerShown: false }} component={SignupScreen} />
        <Stack.Screen name='forget' options={{ headerShown: false }} component={ForgetPassword} />

      </Stack.Navigator>


    )
  }

  return (
    <NavigationContainer>
 
{isLoggedIn?
     <Stack.Navigator>
       <Stack.Screen name='home' options={{ headerShown: false }} component={HomeScreen} />
       </Stack.Navigator>
       :<AuthStack/>}
      

    </NavigationContainer>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
