import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, images, SIZES, icons, FONTS} from '../../constants';
import FastImage from 'react-native-fast-image';

interface HomeCardProps {
  containerOverRide?: any;
  rating?: number | string;
  reviewCount?: number | string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
  location: string;
  beds: string | number;
  baths: string | number;
}

const HomeCard = (props: HomeCardProps) => {
  const {
    containerOverRide,
    onPress,
    rating,
    reviewCount,
    beds,
    baths,
    location,
    title,
  } = props;
  return (
    <TouchableOpacity
      style={[styles.container, containerOverRide]}
      onPress={onPress}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.itemImage}
          source={images.house1}
          resizeMode="cover"
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.ratingContainer}>
          <FastImage source={icons.star} style={styles.star} />
          <Text style={styles.reviews}>
            {rating ? rating : '-'}({reviewCount ? reviewCount : '-'})
          </Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>{location}</Text>
        <View style={styles.bedBathContainer}>
          <View style={styles.room}>
            <FastImage
              style={styles.bedbathIcon}
              source={icons.bed}
              tintColor={COLORS.gray}
            />
            <Text style={styles.roomTxt}> {beds} room(s)</Text>
          </View>
          <View style={styles.room}>
            <FastImage
              style={styles.bedbathIcon}
              source={icons.bath}
              tintColor={COLORS.gray}
            />
            <Text style={styles.roomTxt}> {baths} bath(s)</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  itemImage: {
    height: SIZES.width * 0.36,
    width: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  infoContainer: {
    flex: 2,
    padding: SIZES.base / 2,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    width: SIZES.width * 0.05,
    height: SIZES.width * 0.05,
    marginHorizontal: 1,
  },
  reviews: {
    ...FONTS.body5,
    color: COLORS.gray,
  },
  title: {
    ...FONTS.body3,
  },
  location: {
    ...FONTS.body5,
  },
  bedBathContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginVertical: 2,
  },
  room: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roomTxt: {
    ...FONTS.body5,
    color: COLORS.darkgray,
    marginHorizontal: 1,
  },
  bedbathIcon: {
    width: SIZES.width * 0.04,
    height: SIZES.width * 0.04,
  },
});
