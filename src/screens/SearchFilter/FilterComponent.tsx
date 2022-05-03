import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppSegementCotrol from '../../components/SegmentControl/AppSegementCotrol';
import RangeSlider from '../../components/RangeSlider/DoubleRangeSlider';
import { COLORS, FONTS, icons, SIZES } from '../../constants';

const FilterComponent = () => {
  const minimumValue = 0
  const maximumValue =20000
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [range, setRange] = useState<number[]>([minimumValue,maximumValue])


const handleTabPress = (index:number)=>{
    setSelectedIndex(index)
}

const handleResetFilter = ()=>{
    console.log('Reset filter here')
}

const handleShowResults = ()=>{
  console.log('Show results')
}


  return (
    <View style={styles.container}>
        <View>
        <AppSegementCotrol
          values={['I want to rent', 'I want to buy',]}
          selectedIndex={selectedIndex}
          handleTabPress={handleTabPress}
        />
        </View>
        <RangeSlider
          range={range}
          setRange={setRange}
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          label='Price range'
        />
        <View>
            <Text>How Long do you want to stay</Text>
        </View>
        <View>
          <Text>Amenities</Text>
        </View>
        <View style={styles.resetShowContainer}>
            <TouchableOpacity
              style={styles.resetBtn}
              onPress={handleShowResults}
            >
              <Image
                source={icons.reset}
                style={styles.resetIcon}
              />
              <Text>Reset all</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.showBtn}
              onPress={handleResetFilter}
            >
              <Text style={styles.showTxt}>Show results</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}



export default FilterComponent

const styles = StyleSheet.create({
    container:{
      
    },
    resetShowContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:SIZES.width*0.3
    },
    resetBtn:{
      flexDirection:'row',
      paddingVertical:5,
      paddingRight:5,
      alignItems:'center'
    },
    showBtn:{
      backgroundColor:COLORS.black,
      paddingVertical :5,
      borderRadius:20,
      paddingHorizontal:10
      
    },
    showTxt:{
      color:COLORS.white
    },
    resetTxt:{
      ...FONTS.h22,
      tintColor:COLORS.frenchGray, 
      marginHorizontal:10
    },
    resetIcon:{
      tintColor:COLORS.frenchGray,
      width:15,
      height:15,
      marginRight:4
    }
})