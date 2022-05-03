import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Slider, } from '@miblanchard/react-native-slider'
import { COLORS, FONTS } from '../../constants'

interface Props {
  label?:string;
  maximumValue:number,
  minimumValue:number,
  setRange:React.Dispatch<React.SetStateAction<number[]>>
  range:number[]

}

const DoubleRangeSlider = (props:Props) => {
  const {label, maximumValue, minimumValue, range, setRange } = props
  return (
    <View
      style={styles.container}
    >
      
            {label ? <Text style={styles.label}>{label}</Text> :null}
            <Text >Ksh.{range[0] } - Ksh. {range[1]} / per month</Text>
            <Slider
                value={range}
                onValueChange={s =>setRange(s as number[])}
                animationType="timing"
                maximumValue={maximumValue}
                minimumValue={minimumValue}
                step={10}
                maximumTrackTintColor={COLORS.lightGray}
                minimumTrackTintColor={COLORS.primary}
                trackMarks={[0, 5]}
                animateTransitions
                trackStyle={{borderRadius: 10, height: 10}}
                thumbStyle={styles.thumbStyle}
              />
        
    </View>
  )
}

export default DoubleRangeSlider

const styles = StyleSheet.create({
  container:{
    marginTop:10
  },
  thumbStyle:{
    height: 26,
    width: 26,
    borderRadius: 20, 
    backgroundColor:COLORS.white,
    borderColor:COLORS.primary,
    borderWidth:1
  },
  label:{
    marginVertical:2,
    ...FONTS.h22
  }
})