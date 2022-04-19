// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Onboarding from '../screens/Onboarding';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

const RegistrationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default RegistrationStack;

