import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useMemo } from 'react';
import { View, TextInput, Image, StyleSheet, Text, TouchableOpacity, Dimensions,ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

const InputScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    const [errors, setErrors] = useState({ name: '', surname: '', email: '' });
    const [touched, setTouched] = useState({ name: false, surname: false, email: false });

    // Function to validate the form
    const validateForm = () => {
        let valid = true;
        const newErrors = { name: '', surname: '', email: '' };

        if (!name.trim()) {
            newErrors.name = 'Name is required!';
            valid = false;
        }
        if (!surname.trim()) {
            newErrors.surname = 'Surname is required!';
            valid = false;
        }
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'A valid email is required!';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    // Memoized validation result
    const isFormValid = useMemo(() => validateForm(), [name, surname, email]);

    // Handle blur event for validation
    const handleBlur = (field) => {
        setTouched({ ...touched, [field]: true });
        validateForm();
    };

    // Handle submit action
    const handleSubmit = () => {
        if (validateForm()) {
            console.log('Name:', name);
            console.log('Surname:', surname);
            console.log('Email:', email);
            // Add navigation or further actions
            navigation.navigate('targetscreen')
        }
    };

    return (
        <ScrollView>
        <View style={styles.container}>

                <Image source={require("../assests/man2.png")} style={styles.man} />
            {/* Image Slider */}
            {/* <Swiper style={styles.wrapper} showsPagination={false} autoplay={true}>
                <View style={styles.slide}>
                    <Image style={styles.image} source={require('../assests/man.png')} />
                </View>
                <View style={styles.slide}>
                    <Image style={styles.image} source={require('../assests/man.png')} />
                </View>
                <View style={styles.slide}>
                    <Image style={styles.image} source={require('../assests/man.png')} />
                </View>
            </Swiper> */}

            {/* Form */}
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.placeholder}>Name</Text>
                    <TextInput
                        style={[styles.input, errors.name && touched.name ? styles.inputError : null]}
                        value={name}
                        placeholder='Your Name'
                        onChangeText={setName}
                        onBlur={() => handleBlur('name')}
                    />
                    {errors.name && touched.name ? <Text style={styles.error}>{errors.name}</Text> : null}
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.placeholder}>Surname</Text>
                    <TextInput
                        style={[styles.input, errors.surname && touched.surname ? styles.inputError : null]}
                        value={surname}
                        placeholder='Your Surname'
                        onChangeText={setSurname}
                        onBlur={() => handleBlur('surname')}
                    />
                    {errors.surname && touched.surname ? <Text style={styles.error}>{errors.surname}</Text> : null}
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.placeholder}>Email</Text>
                    <TextInput
                        style={[styles.input, errors.email && touched.email ? styles.inputError : null]}
                        value={email}
                        placeholder='Your Email'
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        onBlur={() => handleBlur('email')}
                    />
                    {errors.email && touched.email ? <Text style={styles.error}>{errors.email}</Text> : null}
                </View>

                {/* Submit Button */}
                <TouchableOpacity
                    style={[styles.getStartedButton, { opacity: isFormValid ? 1 : 0.7 }]}
                    onPress={handleSubmit}
                    disabled={!isFormValid}
                >
                    <Text style={styles.getStartedButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
};

export default InputScreen;

const styles = StyleSheet.create({
    man: {
        // marginTop: 20,
        height: 280,
        width: 280,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
        paddingVertical:115,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        height: Dimensions.get('window').height * 0.20, // Adjust height as needed
        top:170,
        marginBottom:-50,
    },
    input: {
        width: 260,
        height: 40,
        borderColor: '#021526',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginLeft:17,
        marginBottom: 5,
        // backgroundColor: '#f0f0f0',
        backgroundColor: 'white',
    },
    inputError: {
        borderColor: 'red',
    },
    formContainer: {
        // bottom:122,
        width: '100%',
        alignItems: 'center',
        // paddingVertical: 5, // Reduce padding to bring form closer to the slider
        marginHorizontal: 10,
        // shadowColor: 'rgba(0, 0, 0, 0.15)',
        // shadowOffset: { width: 1.95, height: 1.95 },
        // shadowOpacity: 0.15,
        // shadowRadius: 2.6,
        // elevation: 4,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginTop:0,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
        marginLeft: 25,
        
    },
    placeholder: {
        fontSize: 16,
        color: '#888',
        marginBottom: 5,
        marginLeft:17,
        fontWeight:'bold',

    },
    error: {
        color: 'red',
        fontSize: 14,
        marginLeft: 25,
    },
    getStartedButton: {
        backgroundColor: '#021526',
        padding: 10,
        borderRadius: 18,
        borderWidth: 1,
        width: 260,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    getStartedButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
