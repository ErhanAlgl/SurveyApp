import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../pages/BottomTabPages/Home';
import Profile from '../../pages/BottomTabPages/Profile';
import Survey from '../../pages/BottomTabPages/Survey';

const Tab = createBottomTabNavigator();

const TabsBotton = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 55,
          left: 25,
          right: 25,
          elevation: 0,
          backgroundColor: '#1D1D1B',
          borderRadius: 50,
          height: 70,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Survey"
        component={Survey}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 12}}>
              <Image
                source={require('../../assets/anket.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#9593FF' : 'white',
                }}
              />
              <Text style={{color: focused ? '#9593FF' : 'white'}}>Anket</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                bottom: 15,
                backgroundColor: focused ? '#0300A3' : 'black',
                padding: 20,
                borderRadius: 50,
              }}>
              <Image
                source={require('../../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 50,
                  tintColor: focused ? '#ffffff' : 'white',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 12}}>
              <Image
                source={require('../../assets/profile.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  margin: 3,
                  tintColor: focused ? '#9593FF' : 'white',
                }}
              />
              <Text style={{color: focused ? '#9593FF' : 'white'}}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default TabsBotton;
