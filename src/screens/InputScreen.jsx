import React, { useState, } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Text, SafeAreaView } from 'react-native';


const InputScreen = () => {

    // const images = [
    //     require('../assests/man.png'),
    //     require('../assests/man.png'),
    //     require('../assests/man.png'),
    //     require('../assests/man.png'),
    // ]


    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        console.log('Name:', name);
        console.log('Surname:', surname);
        console.log('Email:', email);
    };

    return (


        <View style={styles.container}>

            

            {/* Image */}
            <Image 
                style={styles.image}
                source={require('../assests/logo2.png')} />

            {/* Form */}
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Surname"
                value={surname}
                onChangeText={setSurname}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <Button title="Submit" onPress={handleSubmit} />

            
        </View>


    )
}

export default InputScreen;
// export default ImageSlider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0f7fa', // light background color
        padding: 20,
    },

    image: {
        width: 200,
        height: 100,
        marginBottom: 20,
        resizeMode: 'contain',
        transform: [{ rotateY: '180deg' }]  // Rotated image
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 20,
        backgroundColor: '#f0f0f0',
    },
    navigation:{
        width:100,
        height:70,
        backgroundColor:'#fff',
    }
})