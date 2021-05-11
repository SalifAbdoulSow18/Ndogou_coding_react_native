import * as React from 'react';
import icon from "../assets/icon.png"
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

function Register ({navigation}) {
  return(
    <View style={{flex: 1, backgroundColor: "#E5E5E5"}}>
    <ScrollView>
      <View style={{alignItems: "center", marginTop: 74}}>
        <Image style={{width: 57, height:63, tintColor: "#11BD9E"}} source={icon}/>
        <Text style={{fontSize: 30, fontWeight:"bold", marginTop: 30, marginBottom: 20}}>Inscrivez-vous</Text>
        </View>

        <View style={{padding: 10}}>
          <TextInput style={style} placeholder="Prénom & Nom"/>
          <TextInput style={style} placeholder="Adresse Email"/>
          <TextInput style={style} placeholder="Mot de passe"/>
          <TextInput style={style} placeholder="Confirmer votre Mot de passe"/>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{height: 37, width:   "100%", backgroundColor:"#11BD9E", justifyContent:"center", alignItems: "center", borderRadius: 7, marginTop: 10}}>
        <Text style={{color: '#ffff'}}>Connexion</Text>
      </TouchableOpacity>
      
       <TouchableOpacity onPress={()=>navigation.navigate('Intro')} style={{marginTop: 25, alignItems: "center"}}>
         <Text> Déja inscrit? <Text>Connectez-vous</Text> </Text>
       </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
  )
}
export default Register


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
