import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

function Intro ({navigation}) {
  return(
    <View style={{flex: 1, marginTop:40}}>
    <ImageBackground 
    style={{width: '100%', height: '100%'}} 
    source={require('../assets/img1.png')}>
    <View style={{marginTop: 25, marginLeft: 25}} >
    <Image 
    style={{width: 57, height: 63}} 
    source={require('../assets/icon.png')} />
    </View>
    
    <View style={{marginLeft: 25, flex: 1, justifyContent:"center"}}>
    <Text style={{color: '#ffff', fontSize: 26, textTransform: "uppercase", fontWeight: "bold"}} > 
    LanceZ{"\n"}
votre{"\n"}cArRière{"\n"}
MAINTENANT !
    
    </Text>
    </View>
     <View style={{flex: .2, paddingHorizontal: 16, flexDirection: "row", justifyContent: "space-between"}}>
      <TouchableOpacity onPress={()=>navigation.navigate('LoginEmail')} style={{height: 37, width: "48%", backgroundColor:"#ffff", justifyContent:"center",       alignItems: "center", borderRadius: 7}}>
        <Text>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={{height: 37, width: "48%", backgroundColor:"transparent", justifyContent:"center", alignItems: "center", borderRadius: 7, borderWidth: 1, borderColor: "#ffff"}}>
        <Text style={{color: '#ffff', textTransform: "uppercase",}}>Inscription</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
  )
}
export default Intro
