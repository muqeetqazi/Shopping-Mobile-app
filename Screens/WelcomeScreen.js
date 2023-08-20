import { StyleSheet,Image, TouchableOpacity,Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from './LoginScreen';
import Logo from './Component/Logo';
import Button from './Component/Buttons';
import Touchable from './Component/Touchable';
import Bottom from './Component/Bottom';
import SignupScreen from './SignupScreen';
import firebase from '../config/Firebase'
function WelcomeScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.container}> 
        <Logo/>
        <Image
          style={styles.mainImage}
          resizeMode='contain'
          source={require('../assets/main.png')}
        />
        <Button 
          title='Sign up now'
          onPress={() =>navigation.navigate('Signup')} 
        />
        <Touchable navigation={navigation} />
        <Bottom/>
      </SafeAreaView>
    );
  }
  
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'white',
           
           
        },mainImage:{
            height:250,width:250,alignSelf:'center',marginTop:80,marginBottom:50
        }
        
                      //  textShadowRadius:3
        }

    
)
export default WelcomeScreen;
