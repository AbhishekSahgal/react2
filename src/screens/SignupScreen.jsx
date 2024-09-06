import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Image source={require("../assests/man.png")} style={styles.man} />
            <Image source={require("../assests/logo2.png")} style={styles.logo} />

            <Text style={styles.subheading}>Your path to success starts here!</Text>

            <TouchableOpacity style={styles.targetButton5}
             onPress={() => navigation.navigate('targetscreen')}>
                <Text style={styles.targetButtonText}>Sign Up</Text>
                <Image source={require("../assests/arrow.png")} style={styles.image}/>
            </TouchableOpacity>

        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginVertical: 120,
        backgroundColor: '#F1F1F1',

    },
    logo: {
        marginTop: 20,
        height: 22,
        width: 199,
    },
    man: {
        marginTop: 30,
        height: 280,
        width: 280,
    },
    subheading: {
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
        marginHorizontal: 50,
        marginTop: 15,
        color: "brown"
    },
    targetButtonText: {
        fontSize: 17,
        fontWeight: '600',
        textAlign: 'center',
    },
    targetButton5: {
        marginTop: 80,
        backgroundColor: '#F1F1F1',
        borderColor: '#000000',
        borderRadius: 25,
        padding: 15,
        paddingVertical: 8,
        margin: 5,
        borderWidth: 1,
        width: 200,
        marginRight: 16,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    image: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
})