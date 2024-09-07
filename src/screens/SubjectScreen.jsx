import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCalendar, faClock, faBars, faBell, faThLarge, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from 'react-native-paper';

const SyllabusPage = () => {
    //for checkbox
    const [isChecked, setIsChecked] = useState(false);
    //for Ongoing button
    const [isPressed, setIsPressed] = useState(false);
    //for gif wla button & Ongoing button
    const handlePress = () => {
        setIsPressed(!isPressed); // Toggle the pressed state
    };

    //for gif wla button
    const [isHovered, setIsHovered] = useState(false);
    const handleHoverIn = () => {
        setIsHovered(true);
    };

    const handleHoverOut = () => {
        setIsHovered(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assests/logo.png')} style={styles.logo} />
                <FontAwesomeIcon icon={faBell} size={20} color="black" />
                <FontAwesomeIcon icon={faThLarge} size={20} color="black" />
            </View>
            <Text style={styles.title}>Syllabus</Text>
            <View style={styles.courseContainer}>
                <View style={styles.courseItem}>
                    {/* for Ongoing wla button */}
                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={handlePress}
                            style={[
                                styles.button,
                                isPressed ? styles.buttonPressed : styles.buttonNotPressed,
                            ]}
                        >
                            <Text style={[styles.buttonText, isPressed && styles.buttonTextPressed]}>
                                Ongoing
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.courseTitle}>Theory of Computation</Text>
                    <View style={styles.courseInfoall}>
                    <View style={styles.courseInfoContainer}>
                        <Text style={styles.courseInfo1}>17+ Hours Syllabus</Text>
                        <Text style={styles.courseInfo2}>Scoring</Text>
                    </View>
                    <Text style={styles.courseInfo3}>8-10 marks questions possible</Text>
                    {/* <FontAwesomeIcon icon={faCheckCircle} size={15} color="green" style={styles.circle} /> */}
                    </View>
                    <View style={styles.container2}>
                        <Checkbox
                            status={isChecked ? 'checked' : 'unchecked'}
                            onPress={() => setIsChecked(!isChecked)}
                            color="#03346E" // Customize color
                        />
                        {/* <Text>{isChecked ? 'Checked' : 'Unchecked'}</Text> */}
                    </View>
                    <View style={styles.container4}>
                        <TouchableOpacity style={styles.targetButton5}
                            onPress={() => { }}>
                            <Text style={styles.targetButtonText}>more</Text>
                            <Image source={require("../assests/arrow_outward.png")} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Repeat for other courses */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        padding: 16,
    },
    logo: {
        width: 200,
        height: 32,
        // marginBottom: 16,
        marginTop: 20,
        // marginLeft: 16,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 32,
    },
    time: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    courseContainer: {
        flex: 1,
        marginBottom: 16,
    },
    courseItem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 16,
        marginBottom: 8,
    },
    courseTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    courseInfoall:{
        // flexDirection: 'row',
        // justifyContent: 'space-evenly',
        alignItems:'flex-start'
        // marginBottom: 4,
    },
    courseInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 4,
    },
    courseInfo1: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#03346E',
        marginBottom: 4,
        textAlign: 'center',
        backgroundColor: "#EAEAD9",
        width: 210,
        borderRadius: 28,
        padding: 8,
        // marginLeft:12,
        marginRight:8,

    },
    courseInfo2: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#03346E',
        marginBottom: 4,
        textAlign: 'center',
        backgroundColor: "#D2E7FF",
        width: 60,
        borderRadius: 28,
        padding: 8,
    },
    courseInfo3: {
        fontSize: 12,
        // alignSelf: 'center',
        fontStyle: 'italic',
        color: '#03346E',
        // marginBottom: 45,
        textAlign: 'center',
        backgroundColor: "#E0E0E0",
        width: 180,
        borderRadius: 28,
        padding: 8,

    },
    footer: {
        padding: 12,
        borderRadius: 28,
        backgroundColor: '#645164',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16,
    },

    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        position: 'absolute',
        top: 5,
        right: 8,

    },

    container3: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    button: {
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 28,
        borderWidth: 2,
    },
    buttonNotPressed: {
        backgroundColor: '#E3F2FD', // Light blue background when not pressed
        borderColor: '#90CAF9', // Border color
    },
    buttonPressed: {
        backgroundColor: '#0D47A1', // Dark blue background when pressed
        borderColor: '#90CAF9', // Border color same as background
    },
    buttonText: {
        color: '#0D47A1', // Dark blue text color
        fontSize: 12,
        fontWeight: 'bold',
    },
    buttonTextPressed: {
        color: '#FFFFFF', // White text color when pressed
    },

    container4: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: '#F5FCFF',
        paddingTop: 16,
    },
    targetButton5: {
        borderColor: '#90CAF9',
        borderRadius: 28,
        padding: 15,
        paddingVertical: 6,
        // margin: 5,
        borderWidth: 2,
        // width: 200,
        // marginRight: 8,
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: 'center',
        backgroundColor: '#0D47A1',
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 28,
        borderWidth: 2,
    },
    image: {
        width: 18,
        height: 18,
        marginLeft: 4,
        // marginRight: 8,

    },
    targetButtonText: {
        color: '#FFFFFF', // Dark blue text color
        fontSize: 12,
        fontWeight: 'bold',
    },

});

export default SyllabusPage;