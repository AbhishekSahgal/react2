import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const TARGET = ({navigation}) => {
  const [selectedTarget, setSelectedTarget] = useState(null);

  const handleTargetClick = (target) => {
    setSelectedTarget(target);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assests/logo.png')} style={styles.logo} />
      <Text style={styles.greeting}><Text style={{color:'red',fontWeight:"400"}}>Hello,</Text> Abhay!</Text>
      <Text style={styles.description}>
        Maximize your learning with a platform that goes beyond the ordinary. Access over 1000+ exam syllabus and track your progress in real time. Identify your strengths and weaknesses to focus on high-scoring topics and achieve your goals efficiently.
      </Text>
      <View style={styles.targetsContainer}>
        <TouchableOpacity onPress={() => handleTargetClick('NEET')} style={styles.targetButton1}>
          <Text style={styles.targetButtonText}>NEET</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('IITJEE')} style={styles.targetButton2}>
          <Text style={styles.targetButtonText}>IITJEE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('ESE')} style={styles.targetButton3}>
          <Text style={styles.targetButtonText}>ESE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('NURSING EXAMS')} style={styles.targetButton4}>
          <Text style={styles.targetButtonText}>NURSING EXAMS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('BANKING')} style={styles.targetButton5}>
          <Text style={styles.targetButtonText}>BANKING</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('RAILWAY')} style={styles.targetButton6}>
          <Text style={styles.targetButtonText}>RAILWAY</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('TEACHING')} style={styles.targetButton7}>
          <Text style={styles.targetButtonText}>TEACHING</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('GATE')} style={styles.targetButton8}>
          <Text style={styles.targetButtonText}>GATE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('UPSE')} style={styles.targetButton9}>
          <Text style={styles.targetButtonText}>UPSE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTargetClick('SSC')} style={styles.targetButton10}>
          <Text style={styles.targetButtonText}>SSC</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.targetText}>Click on your target</Text>
      <TouchableOpacity style={styles.getStartedButton}>
        <Text style={styles.getStartedButtonText}
        onPress={() => navigation.navigate('ComputerScience')}
        >Get started</Text>
      </TouchableOpacity>
      <Text style={styles.loadingText}>loading everything you need...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 200,
    height: 32,
    marginBottom: 16,
    marginTop: 60,
    marginLeft: 16,
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 16,

  },
  description: {
    textAlign: 'left',
    marginBottom: 46,
    marginLeft: 16,
    marginRight:16,
    fontSize:16,

  },
  targetsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',

  },
  targetButton1: {
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 100,
    marginLeft: 16,

  },
  targetButton2: {
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 100,
  },
  targetButton3: {
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 100,
    marginRight:16,

  },
  targetButton4: {
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 200,
    marginLeft: 16,

  },
  targetButton5: {
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 110,
    marginRight:16,

  },
  targetButton6: {
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 110,
    marginLeft: 16,

  },
  targetButton7: {
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 200,
    marginRight:16,

  },
  targetButton8: {
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 110,
    marginLeft: 16,

  },
  targetButton9: {
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 100,
  },
  targetButton10: {
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 90,
    marginRight:16,

  },

  targetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
  },
  targetText: {
    marginTop: 10,
    // marginBottom: 10,
    textAlign:'center',
    fontSize: 12,
    color: '#888',
    fontWeight:"light",
    

  },
  getStartedButton: {
    backgroundColor: '#021526',
    padding: 15,
    borderRadius: 28,
    // width: '80%',
    alignItems: 'center',
    marginTop: 36,
    justifyContent: 'center',
    marginRight:58,
    marginLeft: 58,


  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  loadingText: {
    marginTop: 110,
    fontSize: 12,
    color: '#888',
    textAlign:'center',

  },
});

export default TARGET;