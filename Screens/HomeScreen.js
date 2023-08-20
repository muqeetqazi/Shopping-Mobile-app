import React from "react";
import { View,StyleSheet ,Image} from "react-native";
import BottomTab from "./Component/Tab";
import icon1 from '../assets/header1.png'
import { signOut, getAuth } from "firebase/auth";
import Button from "./Component/Buttons";
const SignOutPressed=async()=>{
await signOut(getAuth())
}
function HomeScreen()
{
    return(
        <View style={styles.container}>
<Button title="Logout" onPress={() => SignOutPressed()} />
<Image source={require('../assets/hmain.png')}/>
<BottomTab/>
        </View>
    )
}
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignContent:'center'
        }
    }
)
export default HomeScreen;