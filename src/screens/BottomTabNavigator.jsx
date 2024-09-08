import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignupScreen from './SignupScreen';
import InputScreen from './InputScreen';
import Experiment from './Experiment';


const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, }}>
      <Tab.Screen name="SignupScreen" component={SignupScreen} />
      <Tab.Screen name="InputScreen" component={InputScreen}  />
      <Tab.Screen name="Experiment" component={Experiment}  />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
