import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SegmentedControlTab from "react-native-segmented-control-tab";
import { COLORS, SIZES } from '../../constants';

export interface SegmentedControlProps {
    values:any[],
    selectedIndex?:number,
    handleTabPress:(index:number)=>void,
    label?:string
}

const AppSegementCotrol = (props:SegmentedControlProps) => {
    const {values, selectedIndex, handleTabPress} = props
  return (
    <View>
    {props.label? <Text
        style={styles.labelStyle}
    >{props.label}</Text> : null }
    <SegmentedControlTab
    values={values}
    selectedIndex={selectedIndex}
    onTabPress={(index)=>handleTabPress(index)}
    borderRadius={20}
    tabBadgeStyle={styles.tabBadgeStyle}
    tabsContainerStyle={styles.tabsContainerStyle}
    tabStyle={styles.tabStyle}
    activeTabStyle={styles.activeTabTextStyle}
    tabTextStyle={styles.tabTextStyle}
  />
  </View>
  )
}

export default AppSegementCotrol

const styles = StyleSheet.create({
    tabsContainerStyle:{
        marginVertical:10,
        borderRadius: SIZES.padding * 4,
        padding: SIZES.width / 60,
        backgroundColor:COLORS.lightGray,
    },
    labelStyle:{

    },
    tabBadgeStyle:{
        backgroundColor:'yellow'
    },
    tabStyle:{
        borderColor:COLORS.transparent,
        borderWidth:0,
        padding:10,
        backgroundColor:COLORS.transparent,
        color:'red'
    },
    tabTextStyle:{
        color:COLORS.darkgray
    },
    activeTabTextStyle:{
        borderRadius:20,
        backgroundColor:COLORS.primary,
        color:COLORS.white,
        paddingVertical:8
    }
})