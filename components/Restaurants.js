import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';


export default function Restaurants() {

		return (
			<ImageBackground
				source={require('../assets/Gradient.png')}
				style={styles.container}>
				<Image 
					source={require('../assets/menu.png')}
					style={styles.menu}
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
	menu: {
		width: 688,
		height: 650,
		resizeMode: 'cover',
		marginTop: -10,
		
	},
	

});