import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const TARGET = () => {
  const [selectedTarget, setSelectedTarget] = useState(null);

  const handleTargetClick = (target) => {
    setSelectedTarget(target);
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('./src/assests/logo.png')} style={styles.logo} /> */}
      <Text style={styles.greeting}>Hello, Abhay!</Text>
      <Text style={styles.description}>
        Maximize your learning with a platform that goes beyond the ordinary. Access over 1000+ exam syllabus and track your progress in real time. Identify your strengths and weaknesses to focus on high-scoring topics and achieve your goals efficiently.
      </Text>
      <View style={styles.targetsContainer}>
        <TouchableOpacity onPress={() => handleTargetClick('NEET')} style={styles.targetButton}>
          <Text style={styles.targetButtonText}>NEET</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('IITJEE')} style={styles.targetButton}>
          <Text style={styles.targetButtonText}>IITJEE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('ESE')} style={styles.targetButton}>
          <Text style={styles.targetButtonText}>ESE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('NURSING EXAMS')} style={styles.targetButton}>
          <Text style={styles.targetButtonText}>NURSING EXAMS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('BANKING')} style={styles.targetButton}>
          <Text style={styles.targetButtonText}>BANKING</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('RAILWAY')} style={styles.targetButton}>
          <Text style={styles.targetButtonText}>RAILWAY</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('TEACHING')} style={styles.targetButton}>
          <Text style={styles.targetButtonText}>TEACHING</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('GATE')} style={styles.targetButton}>
          <Text style={styles.targetButtonText}>GATE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('AE/JE')} style={styles.targetButton}>
          <Text style={styles.targetButtonText}>AE/JE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('UPSE')} style={styles.targetButton}>
          <Text style={styles.targetButtonText}>UPSE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('SSC')} style={styles.targetButton}>
          <Text style={styles.targetButtonText}>SSC</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.targetText}>Click on your target</Text>
      <TouchableOpacity style={styles.getStartedButton}>
        <Text style={styles.getStartedButtonText}>Get started</Text>
      </TouchableOpacity>
      <Text style={styles.loadingText}>loading everything you need...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  targetsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  targetButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  targetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  targetText: {
    marginTop: 20,
    marginBottom: 10,
  },
  getStartedButton: {
    backgroundColor: '#007aff',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default TARGET;