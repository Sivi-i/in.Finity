import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';


export default function Sports() {

		return (
			<ImageBackground
				source={require('../assets/Gradient.png')}
				style={styles.container}>
				<Image 
					source={require('../assets/sports.png')}
					style={styles.sports}
				/>
		   	 
		   	 
					
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
	sports: {
		width: 635,
		height: 700,
		resizeMode: 'stretch',
		marginTop: -10,
		
	},
	

});