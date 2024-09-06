import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'


const SplashScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>SplashScreen</Text> */}
      <Image source={require('../assests/splash.png')} style={styles.logo}/>
      
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#64348",
        alignItems:'center',
        justifyContent:'center',
       
    
        

        
    },
    logo:{
       
        resizeMode:"cover"
    },
});