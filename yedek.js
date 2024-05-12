import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './src/pages/AuthPages/Login';
import Register from './src/pages/AuthPages/Register';
import Kvkk from './src/pages/AuthPages/Kvkk';
import Landing from './src/pages/Landing';

import Home from './src/pages/BottomTabPages/Home';
import Profile from './src/pages/BottomTabPages/Profile';
import Survey from './src/pages/BottomTabPages/Survey';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Survey" component={Survey} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Kvkk" component={Kvkk} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
