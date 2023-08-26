import React, { useState } from "react";
import { View,StyleSheet ,Image} from "react-native";
import BottomTab from "./Component/Tab";
import icon1 from '../assets/header1.png'
import { signOut, getAuth } from "firebase/auth";
import Button from "./Component/Buttons";
import { ActivityIndicator } from "react-native";
import { WebView } from 'react-native-webview';
import Cart from "./Component/Cart";
const SignOutPressed=async()=>{
await signOut(getAuth())

}
function HomeScreen()
{
    const [loading,setLoading]=useState(false)
    return(
        <View style={{flex:1,backgroundColor:'white'}} >
           
    <View style={styles.container}>
<Image  source={require('../assets/hmain.png')}/>
<View style={{flexDirection:'row',height:'2222'}}>
    <Cart/>
    <Cart/>
</View>
</View>
<View style={{flexDirection:'row',marginLeft:26}}>
<Cart/>
<Cart/>
<Cart/>

</View>
<View style={{flexDirection:'row',marginTop:30, marginBottom:140,
marginLeft:26}}>
<Cart/>
<Cart/>
<Cart/>

</View>
<BottomTab style/>

        </View>
    )
}
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignContent:'center',
            backgroundColor: 'white',
            marginTop:-120
        }
    }
)
export default HomeScreen;

/*          {loading ?<ActivityIndicator style=
          {{zIndex:1,position:"absolute",top:'50%',alignContent:'center',alignSelf:'center'}}/>:null}
             <WebView
      style={{flex:1}}
      onLoadStart={()=>{setLoading(true)}}
      onLoadEnd={()=>{setLoading(false)}}
      source={{ uri: 'https://tankionline.com/play/' }}
      
      
*/
