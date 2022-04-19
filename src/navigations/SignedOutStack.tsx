import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegistrationStack from './RegistrationStack';
import HomeTabs from './HomeTabs';
import SearchScreen from '../screens/SearchScreen';
import PropertyDetail from '../screens/PropertyDetail';

const Stack = createNativeStackNavigator();

const SignedOutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="registrationStack" component={RegistrationStack} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="PropertyDetail" component={PropertyDetail} />
    </Stack.Navigator>
  );
};

export default SignedOutStack;

const styles = StyleSheet.create({});
