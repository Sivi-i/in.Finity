import { StatusBar } from 'expo-status-bar';
import React, {Component, useEffect, useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, AppRegistry } from 'react-native'
import {Header} from 'react-native-elements'
import { NavigationContainer } from './node_modules/@react-navigation/native'
import {createStackNavigator} from './node_modules/@react-navigation/stack'
import {Image} from 'react-native'
import * as Location from 'expo-location'
import HomeScreen from './components/HomeScreen'
import BottomNavigation from './components/BottomNavigation'




const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen 
            name = "TabNavigator"
            component = {BottomNavigation}
            options = {{
              title: <Image 
                    source = {require('./assets/infinitySign.png')}
                    style= {{ width: 65, height: 45, alignItems: 'center', resizeMode: 'stretch', justifyContent: 'center' }}
                     />,
              
              headerStyle:{
                backgroundColor:'#004B8D'
              }
            }}
           />
        </Stack.Navigator>
    </NavigationContainer>
  );
      
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  IndyImage: {
    flex: 1,
    width: 100,
    
  },
  BGimg: {
    flex: 1,
    alignItems: 'center',
    position: 'relative'    
},

  Header: {

  }
 
});
