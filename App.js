import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Intro from "./components/Intro";
import Register from "./components/Register";
import LoginPhone from "./components/LoginPhone"
import LoginEmail from "./components/LoginEmail"


const Stack = createStackNavigator()

export default function App() {
  return (
     <View style={styles.container}>
       <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen options={{headerShown: false}} name="Intro" component={Intro} />
            <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
            <Stack.Screen options={{headerShown: false}} name="LoginPhone" component={LoginPhone} />
            <Stack.Screen options={{headerShown: false}} name="LoginEmail" component={LoginEmail} />
         </Stack.Navigator>  
       </NavigationContainer>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
