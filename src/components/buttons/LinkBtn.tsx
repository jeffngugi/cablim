import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'

interface Props {
    title:string,
    textColor?:string
    onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const LinkBtn = (props:Props) => {
  return (
    <TouchableOpacity
        onPress={props.onPress}
        style={{alignItems:'center', marginVertical:4}}
    >
      <Text style={{
          color:props.textColor? props.textColor : COLORS.frenchGray
      }}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default LinkBtn

const styles = StyleSheet.create({})