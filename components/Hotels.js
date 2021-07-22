import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';


export default function Hotels() {

		return (
			<ImageBackground
				source={require('../assets/Gradient.png')}
				style={styles.container}>
				<Image 
					source={require('../assets/hotelList.png')}
					style={styles.hotels}
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
	hotels: {
		width: 465,
		height: 640,
		right: 1.5,
		resizeMode: 'cover',
		
	},
	

});