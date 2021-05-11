import * as React from 'react';
import icon from "../assets/icon.png"
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';

function LoginPhone ({navigation}) {
  return(
    <View style={{flex: 1, backgroundColor: "#E5E5E5"}}>
      <View style={{alignItems: "center", marginTop: 74}}>
        <Image style={{width: 57, height:63, tintColor: "#11BD9E"}} source={icon}/>
        <Text style={{fontSize: 30, fontWeight:"bold", marginTop: 30, marginBottom: 20}}>Connectez-vous</Text>
        </View>

        <View style={{padding: 10}}>
          <TextInput style={style} placeholder="Entrer votre numéro de téléphone"/>
          
          <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{height: 37, width:   "100%", backgroundColor:"#11BD9E", justifyContent:"center", alignItems: "center", borderRadius: 7, marginTop: 10}}>
        <Text style={{color: '#ffff'}}>Se connecter</Text>
      </TouchableOpacity>
      
       <TouchableOpacity onPress={()=>navigation.navigate('LoginEmail')} style={{height: 37, width: "100%", backgroundColor:"#ffff", marginTop:18, justifyContent:"center", alignItems: "center", borderRadius: 7, borderWidth: 1, borderColor: "#11BD9E"}}>
        <Text style={{color:"#001F34",fontSize: 12}}>Se connecter avec un email</Text>
      </TouchableOpacity>
      
      
        </View>
    </View>
  )
}
export default LoginPhone


const style = {
  width:"100%",
  height: 47,
  margin: "auto",
  borderWidth: 1,
  borderColor: "#F1F1F1",
  borderRadius: 10,
  shadowORadius: 40,
  shadowOpacity: .5,
  shadowOffset: {width:2, height:2},
  shadowColor: "#ccc",
  paddingHorizontal: 15,
  backgroundColor: "#FFF",
  justityContent: "center",
  marginBottom: 20

}


