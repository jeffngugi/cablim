import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppSegementCotrol from '../../components/SegmentControl/AppSegementCotrol';

const FilterComponent = () => {
const [selectedIndex, setSelectedIndex] = useState(0)

const handleTabPress = (index:number)=>{
    setSelectedIndex(index)
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
        <View>
            <Text>Price range</Text>
            
        </View>
        <View>
            <Text>How Long do you want to stay</Text>
        </View>
    </View>
  )
}



export default FilterComponent

const styles = StyleSheet.create({
    container:{

    }
})