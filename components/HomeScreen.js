import React, {Component, useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { NavigationContainer } from '../node_modules/@react-navigation/native'
import {createStackNavigator} from '../node_modules/@react-navigation/stack'
import * as Location from 'expo-location'
import {Permissions} from 'expo'
import { Card } from 'react-native-elements'
import { set } from 'react-native-reanimated';
import DatePicker from './DatePicker'

const WEATHER_API_KEY = '6676cd12475681a9460c9a08e73c1131'
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const UNIT_TYPE = 'imperial'
const Stack = createStackNavigator()

export default function HomeScreen() {
    
    const [errorMessage, setErrorMessage] = useState(null)
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [weather, setWeather] = useState([])
    const [temperature, setTemperature] = useState(null)

    useEffect(() => {
        getForecast()
    },[]);

    async function getForecast(){
        try{
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted'){
                setErrorMessage('Location permission not granted');
                return;
            }

            const location = await Location.getCurrentPositionAsync();
            setLatitude(location.coords.latitude);
            setLongitude(location.coords.longitude);
        }catch(e){
         setErrorMessage(e); 
        }

        let url = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${UNIT_TYPE}&appid=${WEATHER_API_KEY}`
         fetch(url) 
        .then(response => response.json())
        .then(json => {
             setTemperature(Math.round(json.main.temp))
        })
        .catch(error => {
            setErrorMessage(error);
            //alert(errorMessage);
        })
    }

    

        return(
            <ImageBackground style={styles.container} source={require('../assets/Gradient.png')}>
                    <View style={styles.card}>
                        <Text style={styles.weatherTemp}>
                            <Image style={styles.weatherIcon} source={require('../assets/sun.png')}></Image>
                            {temperature}
                            </Text>
                    </View>
                    <View style = {styles.calender}><DatePicker></DatePicker></View>
                    <Image 
                        source={require('../assets/eventsList.png')}
                        style = {styles.eventsList}
                    />
            </ImageBackground>
        )   
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: 45,
        justifyContent: 'flex-start',

    },

    card: {
        backgroundColor: 'skyblue',
        borderWidth: 0,
        minHeight: 215,
        width: '100%',       
        height: '37%'
    },

    weatherTemp: {
        fontSize: 50,
        color: 'white',
        justifyContent: 'center',
        
    },

    calender: {
        justifyContent:'flex-end',
        width: '100%',
        height: '10%',
        backgroundColor: 'skyblue',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 5,
        }
    },

    weatherIcon: {
        width: 150,
        height: 150,
        paddingBottom: 50
        
    },

    eventsList: {
        resizeMode: 'stretch',
        width: 450,
        height: 340,
        top: 6
    }

    
})