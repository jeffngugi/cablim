import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import HomeCard from '../components/HomeCard/HomeCard';
import AppSegementCotrol from '../components/SegmentControl/AppSegementCotrol';

const HomeScreen = ({navigation}: any) => {

  const [selectedIndex, setSelectedIndex] = useState(0)


  const handleTabPress = (index:number)=>{
    setSelectedIndex(index)
    }

  const handleTouchLocations = () => {
    console.log('Location actions here');
  };

  const navigateToSearchFilter = (searchtype:boolean) => {
    navigation.navigate('Search', {filter:searchtype});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerLabel}>Find your place in</Text>
        <TouchableOpacity
          style={styles.headerLocations}
          onPress={() => handleTouchLocations()}>
          <View style={styles.headerPin}>
            <Image source={icons.location} style={styles.headerPin} />
          </View>
          <Text style={styles.locationText}>Nairobi, Kenya</Text>
          <View style={styles.headerDownArrow}>
            <Image source={icons.down} style={styles.headerDownArrow} />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.searchContainer}
        onPress={() => {
          navigateToSearchFilter(false);
        }}>
        <View>
          <Image source={icons.search} style={styles.searchIcon} />
        </View>
        <Text style={styles.searchPlaceholder}>
          Search address, city, location
        </Text>
        <TouchableOpacity onPress={() => navigateToSearchFilter(true)}>
          <Image source={icons.filter} style={styles.filterIcon} />
        </TouchableOpacity>
      </TouchableOpacity>
      <Text style={styles.mainLabel}>What do you need ?</Text>
      <AppSegementCotrol
          values={['I want to rent', 'I want to buy',]}
          selectedIndex={selectedIndex}
          handleTabPress={handleTabPress}
        />
      <View style={styles.nearContainer}>
        <Text style={styles.nearHead}>New your location</Text>
        <TouchableOpacity style={styles.seeNearBtn}>
          <Text style={styles.nearCount}>243 properties in Nairobi</Text>
          <Text style={styles.nearSee}>See all</Text>
        </TouchableOpacity>
        <HomeCard
          title="Jeff ngugi trial houses"
          location="Thogoto, kikuyu"
          baths={2}
          beds={2}
        />
      </View>

      <View style={styles.nearContainer}>
        <TouchableOpacity style={styles.seeNearBtn}>
          <Text style={styles.topRated}>Top rated in Nairobi</Text>
          <Text style={styles.seeTop}>See all</Text>
        </TouchableOpacity>
        <HomeCard
          title="Jeff ngugi trial houses"
          location="Gitaru, kikuyu"
          baths={2}
          beds={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    marginLeft: SIZES.base,
    marginRight: SIZES.base,
  },
  header: {
    width: '60%',
  },
  headerLabel: {
    ...FONTS.h4,
    color: COLORS.gray,
    marginVertical: SIZES.base / 4,
    marginHorizontal: 2,
  },
  headerLocations: {
    flexDirection: 'row',
    marginVertical: SIZES.base / 4,
    alignItems: 'center',
    paddingBottom: SIZES.padding / 2,
  },
  headerPin: {
    tintColor: COLORS.primary,
    width: 20,
    height: 20,
  },
  locationText: {
    ...FONTS.h3,
    marginHorizontal: 5,
  },
  headerDownArrow: {
    tintColor: COLORS.darkgray,
    width: 15,
    height: 15,
  },
  searchContainer: {
    backgroundColor: COLORS.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: SIZES.font,
    borderRadius: SIZES.padding * 4,
    paddingVertical: SIZES.width / 50,
    marginVertical: SIZES.width / 22,
  },
  searchIcon: {
    width: SIZES.width / 16,
    height: SIZES.width / 16,
  },
  filterIcon: {
    width: SIZES.width / 16,
    height: SIZES.width / 16,
  },
  searchPlaceholder: {
    color: COLORS.darkgray,
    marginHorizontal: 20,
    flex: 1,
  },
  mainLabel: {
    marginVertical: SIZES.width / 40,
    ...FONTS.h22,
    color: COLORS.darkgray,
    marginHorizontal: 2,
  },
  searchForContainer: {
    borderRadius: SIZES.padding * 4,
    padding: SIZES.width / 60,
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray,
    justifyContent: 'space-between',
  },
  nearContainer: {
    marginVertical: SIZES.width / 50,
  },
  nearHead: {
    ...FONTS.h22,
    fontWeight: 'bold',
  },
  seeNearBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.width / 45,
  },
  nearCount: {
    ...FONTS.h4,
    color: COLORS.gray,
  },
  nearSee: {
    ...FONTS.h4,
    color: COLORS.primary,
  },
  topRated: {
    ...FONTS.h3,
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  seeTop: {
    ...FONTS.h3,
    color: COLORS.primary,
  },
});
