// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './src/screen/HomeScreen';
import targetscreen from './src/screens/targetscreen';
import SignupScreen from './src/screens/SignupScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignupScreen' screenOptions={{headerShown:false,}}>
        <Stack.Screen name="targetscreen" component={targetscreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;