import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { COLORS, icons, SIZES } from '../../constants'

interface Props {
    containerOverider?:any,
    placeholder?:string,
    
}

const SearchFilter = (props:Props) => {
  return (
    <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}

        />
        <TouchableOpacity style={styles.filterBtn}>
          <Image
              source={icons.setting}
              style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
      },
    searchInput:{
        backgroundColor:COLORS.inputBackground,
        width:'75%',
        borderRadius:35,
        borderWidth:1,
        borderColor:COLORS.frenchGray,
        paddingHorizontal:SIZES.base,
        marginRight:5
        
      },
      filterBtn:{
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.radius,
        alignItems:'center',
        justifyContent:'center',
        padding:10
      },
      filterIcon:{
        tintColor:COLORS.white,
        resizeMode:'contain',
        width:SIZES.width/15,
        height:SIZES.width/15
      }
})