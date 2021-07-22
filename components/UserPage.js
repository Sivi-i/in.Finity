import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';


export default function UserPage() {

		return (
            <View style ={styles.container}>
                <View>
                    <View style={styles.userSection}>
                        <Image source={require('../assets/userIcon.png')} style={styles.userIcon}/>
                        <Text style={styles.text}>Hello, User! </Text>
                    </View>
                </View>
          <View style = {styles.preferencesButton}>
                <Button       
                    title = "App Preferences"
                    color = 'white'
                />
          </View>
          <View style = {styles.accountButton}>
                <Button 
                    title = "Account Settings"
                    color = 'white'
                />
          </View>
          <View style = {styles.careerButton}>
                <Button 
                    title = "Career Finder"
                    color = 'white'
                />
          </View>
            </View>
                
		);
	
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
        
        
	},

    userSection: {
        backgroundColor: '#CCDBE8',
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    userIcon: {
        borderRadius: 100,
    },

    text: {
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        left: 5,
        top: 10
    },

    buttonSection: {
        borderRadius: 50,
        bottom: 100,
    },

    preferencesButton: {
        backgroundColor: '#004B8D',
        justifyContent: 'center',
        width: '60%',
        left: 75,
        borderRadius: 100,
        bottom: 100
    },

    accountButton: {
        backgroundColor: '#004B8D',
        justifyContent: 'center',
        width: '60%',
        left: 75,
        borderRadius: 100,
        bottom: 80
    },

    careerButton: {
        backgroundColor: '#004B8D',
        justifyContent: 'center',
        width: '60%',
        left: 75,
        borderRadius: 100,
        bottom: 60
    }
	

});