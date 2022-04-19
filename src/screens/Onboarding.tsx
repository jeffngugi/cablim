import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import NormalBtn from '../components/buttons/NormalBtn';
import GradientBtn from '../components/buttons/GradientBtn';
import {images} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Onboarding = ({navigation}: any) => {
  // const navigation = useNavigation()
  const handleToLogin = () => {
    navigation.navigate('Login');
  };

  const handleToSignUp = () => {
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={images.Gallery} />
        <LinearGradient
          style={styles.overlay}
          colors={[COLORS.transparent, COLORS.white]}>
          <Text style={styles.title}>New Place, New home</Text>
        </LinearGradient>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.txt}>
          Are you ready to uproot and start over in a new area? Cablim will help
          you in your journey
        </Text>
        <View style={styles.btnContainer}>
          <GradientBtn
            onPress={() => handleToLogin()}
            title="Login"
            width="48%"
          />
          <NormalBtn
            title="Sign Up"
            width="48%"
            onPress={() => handleToSignUp()}
          />
        </View>
        <NormalBtn
          title="Skip"
          onPress={() => navigation.navigate('HomeTabs')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    backgroundColor: COLORS.white,
    flex: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: SIZES.padding,
  },
  txt: {
    color: COLORS.gray,
    textAlign: 'center',
    ...FONTS.body3,
    marginVertical: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  overlay: {
    width: SIZES.width,
    height: '50%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    color: COLORS.black,
    ...FONTS.h1,
    fontWeight: 'bold',
  },
});
