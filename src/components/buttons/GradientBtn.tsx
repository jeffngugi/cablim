import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import LinearGradient from 'react-native-linear-gradient';

interface BtnProps {
  title: string;
  borderColor?: string;
  paddingVertical?: number;
  backgroundColor?: string;
  color?: string;
  borderRadius?: number;
  txtColor?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  width?: string;
}

const GradientBtn = (props: BtnProps) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#917AFD', '#6246EA']}
      style={styles(props).container}>
      <TouchableOpacity onPress={props.onPress} style={styles(props).skipBtn}>
        <Text style={styles(props).txt}> {props.title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GradientBtn;

const styles = (props: BtnProps) =>
  StyleSheet.create({
    container: {
      borderRadius: props.borderRadius ? props.borderRadius : 20,
      borderColor: props.borderColor ? props.borderColor : COLORS.lightGray,
      borderWidth: 1,
      backgroundColor: props.borderColor ? props.borderColor : COLORS.white,
      width: props.width ? props.width : '100%',
    },
    skipBtn: {
      alignItems: 'center',
      borderRadius: props.borderRadius ? props.borderRadius : 16,
      borderColor: props.borderColor ? props.borderColor : COLORS.lightGray,
      paddingVertical: props.paddingVertical ? props.paddingVertical : 12,
      width: '100%',
    },
    txt: {
      color: props.txtColor ? props.txtColor : COLORS.white,
    },
  });
