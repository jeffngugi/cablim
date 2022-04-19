import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants/theme';

interface Props {
  title: string;
  textColor?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  ContainerOverride?: any;
}

const LinkBtn = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        {
          alignItems: 'center',
          marginVertical: 4,
          alignSelf: 'center',
          justifyContent: 'center',
          paddingHorizontal: SIZES.width / 25,
          paddingVertical: SIZES.width / 50,
        },
        props.ContainerOverride && props.ContainerOverride,
      ]}>
      <Text
        style={{
          color: props.textColor ? props.textColor : COLORS.frenchGray,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default LinkBtn;

const styles = StyleSheet.create({});
