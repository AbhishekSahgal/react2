import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCalendar, faClock, faBars, faBell, faThLarge, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from 'react-native-paper';

const SyllabusPage = () => {
    const [isChecked, setIsChecked] = useState(false);
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
                    <Text style={styles.courseTitle}>Theory of Computation</Text>
                    <View style={styles.courseInfoContainer}>
                        <Text style={styles.courseInfo1}>17+ Hours Syllabus</Text>
                        <Text style={styles.courseInfo2}>Scoring</Text>
                    </View>
                    <Text style={styles.courseInfo3}>8-10 marks questions possible</Text>
                    {/* <FontAwesomeIcon icon={faCheckCircle} size={15} color="green" style={styles.circle} /> */}
                    <View style={styles.container2}>
                        <Checkbox
                            status={isChecked ? 'checked' : 'unchecked'}
                            onPress={() => setIsChecked(!isChecked)}
                            color="#03346E" // Customize color
                        />
                        {/* <Text>{isChecked ? 'Checked' : 'Unchecked'}</Text> */}
                    </View>
                    <Text style={styles.moreButton}>more</Text>
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
    moreButton: {
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: "#03346E",
        width: 100,
        borderRadius: 28,
        position: 'absolute',
        bottom: 16,
        right: 16,
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
        top: 6,
        right: 8,

    },

});

export default SyllabusPage;