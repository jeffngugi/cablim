import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller, Control, FieldValues} from 'react-hook-form';
import { COLORS, FONTS } from '../../constants/theme';

interface Props {
    name:string,
    control:Control<FieldValues, any> | undefined,
    rules?:any,
    secureTextEntry?:boolean,
    placeholder?:string,
    backgroundColor?:string,
    width?:string,
    borderColor?:string
}   

const CustomInput = (props:Props) => {
    const {control, name, rules,placeholder, secureTextEntry} = props
    const [focused, setFocused] = useState(false)
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles(props, focused, error).container,
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles(props, focused, error).input}
              secureTextEntry={secureTextEntry}
              
              onFocus={()=>setFocused(true)}
              onEndEditing={()=>setFocused(false)}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch', ...FONTS.body5}}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

const styles =   (props:Props, focused:boolean, error:any) => StyleSheet.create({
  container: {
    backgroundColor: props.backgroundColor ? props.backgroundColor : focused?COLORS.btnBack:COLORS.white,
    width: props.width ? props.width : '100%',
    borderColor: error?'red':focused?COLORS.primary:COLORS.frenchGray,
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 10,
    marginTop: 5,
    height:40,
    justifyContent:'center'
  },
  input: {
      marginVertical:6,
  },

});

export default CustomInput;