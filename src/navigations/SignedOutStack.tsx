import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import RegistrationStack from './RegistrationStack'
import HomeTabs from './HomeTabs'

const Stack = createNativeStackNavigator()

const SignedOutStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
      <Stack.Screen name='registrationStack' component={RegistrationStack} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  )
}

export default SignedOutStack

const styles = StyleSheet.create({})