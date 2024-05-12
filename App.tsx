import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {SurveyProvider} from './src/SurveyContext';

import Login from './src/pages/AuthPages/Login';
import Register from './src/pages/AuthPages/Register';
import Kvkk from './src/pages/AuthPages/Kvkk';
import Landing from './src/pages/Landing';

import ResultPage from './src/pages/ResultPages/ResultPage';
import {ActivityIndicator} from 'react-native-paper';
import TabsBotton from './src/component/Navigation/tabs';

const Stack = createStackNavigator();

function Pages() {
  const userSession = useSelector(s => s.user);
  const isAuthloading = useSelector(s => s.isAuthloading);

  if (isAuthloading) {
    return <ActivityIndicator />;
  }
  if (userSession) {
    return <TabsBotton />;
  }
  return <Login />;
}

const App = () => {
  return (
    <SurveyProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Pages" component={Pages} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Kvkk" component={Kvkk} />
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="ResultPage" component={ResultPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SurveyProvider>
  );
};

export default App;
