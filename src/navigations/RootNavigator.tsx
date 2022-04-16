import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import Login from '../screens/Login'
import SignedInStack from './SignedInStack'
import SignedOutStack from './SignedOutStack'

const Stack = createNativeStackNavigator()

const isLoggedIn = true


const RootNavigator = () => {
  return (
    <NavigationContainer>
      {
          isLoggedIn ?
          <>
          <SignedOutStack />
          </>
            :
           <>
            <SignedOutStack />
           </>
      }
    </NavigationContainer>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})