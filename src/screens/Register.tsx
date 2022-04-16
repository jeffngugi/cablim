import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { back } from '../constants/icons'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import CustomTextInput from '../components/formInputs/CustomTextInput'
import {useForm} from 'react-hook-form'
import GradientBtn from '../components/buttons/GradientBtn'
import NormalBtn from '../components/buttons/NormalBtn'
import BlankSpacer from '../components/BlankSpacer'
import LinkBtn from '../components/buttons/LinkBtn'

const Login = ({navigation}:any) => {
  const handleBack = ()=>{
    navigation.goBack()
  }

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data:{}) =>{
    console.log('Login ', data)
    navigation.navigate('HomeTabs')
  }

  return (
    <SafeAreaView
      style={{flex:1}}
    >
      <View style={styles.header}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={()=>{handleBack()}}
      >
        <Image 
          source={back}
          style={styles.backImg}
        />
      </TouchableOpacity>
      </View>
      <View style={styles.topTxtContainer}>
        <Text style={styles.topTxtHeader}>Let's explore together</Text>
        <Text style={styles.topTxt}>Create your Cablim account to explore your dream place to live accoss the whole Country/Kenya </Text>
      </View>
      <View style={styles.formContainer}>
      <Text style={styles.label}>Username</Text>
      <CustomTextInput 
          name='username'
          control={control}
          placeholder={'Your name'}
          rules={{
            required: { value: true, message: "Username is required" },
          }}
      />
      <Text style={styles.label}>Password</Text>
      <CustomTextInput 
          name='password'
          secureTextEntry
          control={control}
          rules={{
            required: { value: true, message: "Password is required" },
          }}
      />
      <BlankSpacer height={20} />
      <CustomTextInput 
          name='phonenumber'
          control={control}
          placeholder={'+254129310201'}
          rules={{
            required: { value: true, message: "Phone number is required" },
          }}
      />
      <BlankSpacer height={20} />
      <GradientBtn 
          title='Register'
          onPress={handleSubmit(onSubmit)}
      />
      <BlankSpacer height={20} />
      <LinkBtn title='Already registered? Login'/>
      <BlankSpacer height={20} />
      <NormalBtn 
            title='Skip'
            onPress={()=>navigation.navigate('HomeTabs')}
        />
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  header:{
    marginHorizontal:SIZES.padding/2
  },
  backImg:{
    width:25,
    height:25,
    marginVertical:8
  },
  topTxtContainer:{
    marginHorizontal:SIZES.padding/2,
    marginVertical:30
  },
  topTxtHeader:{
    ...FONTS.h11,
    marginVertical:2,
    fontWeight:'bold'
  },
  topTxt:{
    ...FONTS.body4, 
    marginVertical:2
  },
  formContainer:{
    marginHorizontal:SIZES.padding/2
  },
  backBtn:{
    alignSelf:'flex-start',
    paddingRight:4
  },
  txtInput:{
    borderRadius:15,
    borderWidth:1,
    borderColor:'red',

  },
  label:{
    color:COLORS.darkgray,
    marginTop:10
  }
})