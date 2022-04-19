import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BlankSpacer = (props: {height: number | string}) => {
  return (
    <View
      style={{
        height: props.height,
      }}
    />
  );
};

export default BlankSpacer;

const styles = StyleSheet.create({});
