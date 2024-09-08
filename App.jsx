// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './src/screen/HomeScreen';
import targetscreen from './src/screens/targetscreen';
import SignupScreen from './src/screens/SignupScreen';
import InputScreen from './src/screens/InputScreen';
import ComputerScience from './src/screens/ComputerScience';
import SubjectScreen from './src/screens/SubjectScreen';
import SyllabusScreen from './src/screens/SyllabusScreen';
import Experiment from './src/screens/Experiment';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignupScreen' screenOptions={{ headerShown: false, }}>
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
        <Stack.Screen name="Experiment" component={Experiment} />
        <Stack.Screen name="ComputerScience" component={ComputerScience} />
        <Stack.Screen name="targetscreen" component={targetscreen} />
      </Stack.Navigator>
        
    </NavigationContainer>
  );
}

export default App;