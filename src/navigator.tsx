import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'; 


const Stack = createStackNavigator()

import HomeScreen from './screens/homeScreen'; 

function HomeStack(){
  return (
    <Stack.Navigator initialRouteName = "home" headerMode = {"none"}>
      <Stack.Screen name = "home" component = {HomeScreen}/>
    </Stack.Navigator>
  )
}

function Navigator(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = {"HomeStack"} headerMode = {"none"}>
        <Stack.Screen name = "HomeStack" component = {HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator; 