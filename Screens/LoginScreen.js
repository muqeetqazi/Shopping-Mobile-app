import React, { useEffect, useState } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import Logo from './Component/Logo';
import { SafeAreaView } from 'react-native-safe-area-context';
import Bottom from './Component/Bottom';
import Input from './Component/Input';
import Button from './Component/Buttons';
import Touchable2 from './Component/Touchable2';
import { ActivityIndicator } from 'react-native';
import Home from './HomeScreen';
import firebaseApp from '../config/Firebase'
import Touchable3 from './Component/Touchable3';
import { getDoc,getFirestore,doc } from 'firebase/firestore';

import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
function LoginScreen({ navigation }) {
  const auth=getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const db=getFirestore(firebaseApp);
  useEffect(()=>{
    if(email.includes('@')&&email.includes('.com'))
    {
      setIsEmailValid(true)
    }
    else
    setIsEmailValid(false)
  if(password.length>6||password.length==6)
  setIsPasswordValid(true)
else
setIsPasswordValid(false)
  },[email,password])
const onLoginPassword=async()=>{
  setLoading(true);
try{
await signInWithEmailAndPassword(auth,email,password)
let res=await getDoc(doc(db,"Profile",email))
console.log(res.data())
alert('user Loggin')
}catch(e)
{
console.log(e)
alert(e.message)
}
setLoading(false);
}
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <View style={styles.inputContainer}>
        <Input
          placeholder={'Email'}
          value={email}
          onChangeText={(t) => setEmail(t)}
        />
       {isEmailValid? null: <Text style={{marginLeft:50,color:'red'}}> Invalid Email</Text>}
        <Input
          placeholder={'Password'}
          value={password}
          onChangeText={(t) => setPassword(t)}
        />
       {isPasswordValid?null: <Text style={{marginLeft:50,color:'red'}}> Invalid Password</Text>}
        <Touchable3 
   
   navigation={navigation}
        />
        <View style={styles.login}>
  {loading?<ActivityIndicator color='pink'/>: null}
          <Button
            title='Login'
            onPress={()=>onLoginPassword()}
          />
          <Touchable2 
          title={'Already have an account'}
          navigation={navigation} />
        </View>
      </View>

      <Bottom />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputContainer: {
    //  marginLeft: 15,
    marginTop: 20,
    //  alignItems: 'center',
    // justifyContent: 'center',
    //  flex: 1,
  },
  login: {
    marginTop: 60
  }
});

export default LoginScreen;
