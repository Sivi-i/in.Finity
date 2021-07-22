import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet} from 'react-native'
import React from 'react'
import {Text, View, ImageBackground, AppRegistry, Image } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Hotels from './Hotels'
import UserPage from './UserPage'
import Sports from './Sports'
import Restaurants from './Restaurants'
import HomeScreen from './HomeScreen'
import PageHolder from './PageHolder'


const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigation(){
    return(
        <Tab.Navigator 
            barStyle={{backgroundColor: '#004B8D'}}
        >
            <Tab.Screen 
            name = "Events" 
            component = {HomeScreen}
            options ={{
                tabBarIcon: ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image 
                            source ={require('../assets/events.png')}
                            resizeMode = 'contain'
                            style = {{
                                width: 55,
                                height: 55,
                                tintColor: focused ? '#FFF' : 'white',
                            }}
                        />
                        
                    </View>
                ),
                title: '',

            }}
            />
            <Tab.Screen 
            name = "Restaurants" 
            component = {Restaurants}
            options = {{
                tabBarIcon: ({focused}) => (
                    <View style = {{alignItems: 'center',  top: 5}}>
                        <Image
                            source ={require('../assets/restaurants.png')}
                            resizeMode = 'contain'
                            style = {{
                                width: 50,
                                height: 50,
                                tintColor: focused ? '#FFF' : 'white',
                            }}
                        />
                    </View>
                ),
                title: ''
            }}
            />
            <Tab.Screen 
            name = "User" 
            component = {UserPage}
            options = {{
                tabBarIcon: ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent: 'center', top: 7}}>
                        <Image
                            source ={require('../assets/user.png')}
                            resizeMode = 'contain'
                            style = {{
                                width: 65,
                                height: 65,
                                tintColor: focused ? '#FFF' : 'white',
                            }}
                        />
                    </View>
                ),
                title: ''
            }}
            />
            <Tab.Screen 
            name = "Hotels" 
            component = {Hotels}
            options = {{
                tabBarIcon: ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source ={require('../assets/hotels.png')}
                            resizeMode = 'contain'
                            style = {{
                                width: 50,
                                height: 50,
                                tintColor: focused ? '#FFF' : 'white',
                            }}
                        />
                    </View>
                ),
                title: ''
            }}
            />
            <Tab.Screen 
            name = "Sports" 
            component = {Sports}
            options = {{
                tabBarIcon: ({focused}) => (
                    <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source ={require('../assets/trophy.png')}
                            resizeMode = 'contain'
                            style = {{
                                width: 50,
                                height: 50,
                                tintColor: focused ? '#FFF' : 'white',
                            }}
                        />
                    </View>
                ),
                title: ''
            }}
            />
        </Tab.Navigator>
    );
}
 


const styles = StyleSheet.create({
    NavBar: {
        backgroundColor: '#004B8D',
    },

})