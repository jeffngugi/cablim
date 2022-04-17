import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:COLORS.background, flex:1}}>
        <Text>Home screen here</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})