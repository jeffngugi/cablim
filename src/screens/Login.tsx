import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {back} from '../constants';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import CustomTextInput from '../components/formInputs/CustomTextInput';
import {useForm} from 'react-hook-form';
import GradientBtn from '../components/buttons/GradientBtn';
import NormalBtn from '../components/buttons/NormalBtn';
import BlankSpacer from '../components/BlankSpacer';
import LinkBtn from '../components/buttons/LinkBtn';

const Login = ({navigation}: any) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data: {}) => {
    console.log('Login ', data);
    navigation.navigate('HomeTabs');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            handleBack();
          }}>
          <Image source={back} style={styles.backImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.topTxtContainer}>
        <Text style={styles.topTxtHeader}>Welcome Back</Text>
        <Text style={styles.topTxt}>
          Login to your Cablim account to explore your dream place to live
          across the whole world{' '}
        </Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Username</Text>
        <CustomTextInput
          name="username"
          control={control}
          rules={{
            required: {value: true, message: 'Username is required'},
          }}
        />
        <Text style={styles.label}>Password</Text>
        <CustomTextInput
          name="password"
          control={control}
          rules={{
            required: {value: true, message: 'Password is required'},
          }}
        />
        <BlankSpacer height={20} />
        <GradientBtn title="Login" onPress={handleSubmit(onSubmit)} />
        <BlankSpacer height={20} />
        <LinkBtn
          title="Have no account, sign up."
          onPress={() => navigation.navigate('Register')}
        />
        <BlankSpacer height={20} />
        <NormalBtn
          title="Skip"
          onPress={() => navigation.navigate('HomeTabs')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: SIZES.padding / 2,
  },
  backImg: {
    width: 25,
    height: 25,
    marginVertical: 8,
  },
  topTxtContainer: {
    marginHorizontal: SIZES.padding / 2,
    marginVertical: 30,
  },
  topTxtHeader: {
    ...FONTS.h11,
    marginVertical: 2,
    fontWeight: 'bold',
  },
  topTxt: {
    ...FONTS.body4,
    marginVertical: 2,
  },
  formContainer: {
    marginHorizontal: SIZES.padding / 2,
  },
  backBtn: {
    alignSelf: 'flex-start',
    paddingRight: 4,
  },
  txtInput: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'red',
  },
  label: {
    color: COLORS.darkgray,
    marginTop: 10,
  },
});
