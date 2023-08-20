import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Logo from './Component/Logo';
import { SafeAreaView } from 'react-native-safe-area-context';
import Bottom from './Component/Bottom';
import Input from './Component/Input';
import Button from './Component/Buttons';
import Touchable1 from './Component/Touchable1';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const SignupScreen = ({ navigation }) => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const auth = getAuth();
    const [loading, setLoading] = useState(false);


    const onSignUpPressed=()=>{
        setLoading(true)
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('User created')
    // ...
    setLoading(false)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   alert(errorMessage)
    // ..
  });

    }
    const [name, setName] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <Logo />
            <View style={styles.input}>
                <Input
                    placeholder={'email'}
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                />
                
               <Input
                    placeholder={'password'}
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                />
            </View>
            {loading?<ActivityIndicator color='pink'/>: null}
            <View style={styles.sigup}>
            <Button  title='Sign Up'
             onPress={()=>onSignUpPressed()}
            />
            </View>
            <View >
            <Touchable1 navigation={navigation} />
            </View>
            <Bottom />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    input: {
        marginTop: 15
    },sigup:{
marginTop:20
    }
    
});

export default SignupScreen;
/*
 <Input
                    placeholder={'Full Name'}
                    value={name}
                    onChangeText={(t) => setName(t)}
                />
                 <Input
                    placeholder={'Re-enter Email'}
                    value={name}
                    onChangeText={(t) => setName(t)}
                />
                <Input
                    placeholder={'Confirm Password'}
                    value={name}
                    onChangeText={(t) => setName(t)}
                />
               
*/