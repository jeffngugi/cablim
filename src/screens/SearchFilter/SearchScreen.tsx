import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity ,TextInput, View} from 'react-native';
import React, { useState } from 'react';
import { COLORS, icons, SIZES } from '../../constants';
import SearchComponent from './SearchComponent';
import FilterComponent from './FilterComponent';

interface Props{
  navigation:any,
  route:any
}

const SearchScreen = (props:Props) => {
  const {navigation, route} = props
  const [results, setResults] = useState(false)
  
  const [filtering, setFiltering] = useState<boolean>(route.params.filter)

  const goBack = ()=>{
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={goBack}
        >
          <Image
              source={icons.back}
              style={styles.backIcon}
          />
        </TouchableOpacity>
        <TextInput 
          style={styles.searchInput}
          onFocus={()=>setFiltering(false)}
          autoFocus={!filtering}
        />
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={()=>setFiltering(!filtering)}
        >
          <Image
              source={icons.setting}
              style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        {
          results ? <Text>Results available</Text> :
        
        
          filtering ?
            <FilterComponent />
          : <SearchComponent />
        
      }
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    marginLeft: SIZES.base,
    marginRight: SIZES.base,
  },
  searchContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  backBtn:{
    padding:SIZES.width/39,
    paddingLeft:1,
  },
  backIcon:{
    width:SIZES.width/15,
    height:SIZES.width/15,
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
    padding:10,
    
  },
  filterIcon:{
    tintColor:COLORS.white,
    resizeMode:'contain',
    width:SIZES.width/15,
    height:SIZES.width/15
  },
  bodyContainer:{
    marginTop:SIZES.base
  }
});
