import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';


export default function Sports() {

		return (
			<ImageBackground
				source={require('../assets/Gradient.png')}
				style={styles.container}>
				
		   	 
					
				<View style={styles.menuContainer}>
					
				</View>
			
			</ImageBackground>
		);
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
        
	},
	top: {
		height: '13%',
		width: '100%',
		
	},
	

});