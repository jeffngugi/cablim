import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {COLORS, FONTS, SIZES, icons, images} from '../constants';
import HomeTabStacks from './HomeTabStacks';

const Tab = createBottomTabNavigator();

interface CustomBarProps {
  focused: boolean;
  label: string;
  icon1: any;
  icon2: any;
}

const HomeTabs = () => {
  const CustomBar = (props: CustomBarProps) => (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={props.focused ? props.icon1 : props.icon2}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: props.focused ? COLORS.primary : COLORS.gray,
        }}
      />
      <Text
        style={{
          color: props.focused ? COLORS.primary : COLORS.gray,
          ...FONTS.body5,
        }}>
        {props.label}
      </Text>
    </View>
  );
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'green',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          //   paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 100,
          backgroundColor: COLORS.white,
          borderTopLeftRadius: SIZES.radius * 2,
          borderTopRightRadius: SIZES.radius * 2,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomBar
              focused={focused}
              label="Explore"
              icon1={icons.home2}
              icon2={icons.home1}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomBar
              focused={focused}
              label="Explore"
              icon1={icons.signpost1}
              icon2={icons.signpost2}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomBar
              focused={focused}
              label="Chat"
              icon1={icons.signpost1}
              icon2={icons.signpost2}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomBar
              focused={focused}
              label="Saved"
              icon1={icons.heart1}
              icon2={icons.heart2}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomBar
              focused={focused}
              label="Profile"
              icon1={icons.user1}
              icon2={icons.user2}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({});
