import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function WeatherInfo({currentWeather}) {
    const {
        main : {temp},
        weather: [details],
    } = currentWeather

    const {icon} = details
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <View style={styles.weatherInfo}>
            <Image style={styles.weatherIcon} source={{uri: iconUrl}} />
            <Text>{temp}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center',
    },

    weatherIcon: {
        width: 100,
        height: 100
    }
})