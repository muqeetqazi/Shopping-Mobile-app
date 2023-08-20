import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from './Component/Logo';
import { SafeAreaView } from 'react-native-safe-area-context';
import Bottom from './Component/Bottom';
import Input from './Component/Input';
import Button from './Component/Buttons';
import Touchable2 from './Component/Touchable2';
import { ActivityIndicator } from 'react-native';
import Home from './HomeScreen';
import Firebase from '../config/Firebase'
import { getAuth,sendPasswordResetEmail } from 'firebase/auth';
function ForgetPassword({ navigation }) {
  const auth=getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
const onRestoredPress=async()=>{
  setLoading(true);
try{
await sendPasswordResetEmail(auth,email)
alert('Password Reset Email has been send successfully')
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
        
        
        <View style={styles.login}>
  {loading?<ActivityIndicator color='pink'/>: null}
          <Button
            title='Restored'
            onPress={()=>onRestoredPress()}
          />
          
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

export default ForgetPassword;
