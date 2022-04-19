import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';

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

const NormalBtn = (props: BtnProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles(props).skipBtn}>
      <Text style={styles(props).txt}> {props.title}</Text>
    </TouchableOpacity>
  );
};

export default NormalBtn;

const styles = (props: BtnProps) =>
  StyleSheet.create({
    skipBtn: {
      alignItems: 'center',
      borderRadius: props.borderRadius ? props.borderRadius : 16,
      borderColor: props.borderColor ? props.borderColor : COLORS.lightGray,
      borderWidth: 1,
      paddingVertical: props.paddingVertical ? props.paddingVertical : 12,
      backgroundColor: props.borderColor ? props.borderColor : COLORS.white,
      width: props?.width ? props.width : '100%',
    },
    txt: {
      color: props.txtColor ? props.txtColor : COLORS.darkgray,
    },
  });
