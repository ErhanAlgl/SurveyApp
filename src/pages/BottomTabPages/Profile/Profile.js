import React from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useSurveyContext} from '../../../SurveyContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {username} = useSurveyContext();

  const handleLogOut = () => {
    dispatch({type: 'REMOVE_USER'});
    AsyncStorage.removeItem('username');
    navigation.navigate('Pages');
  };

  return (
    <SafeAreaView>
      <Text>Güle Güle, John Doe{username}</Text>
      <Button title="Log Out" onPress={handleLogOut} />
    </SafeAreaView>
  );
};

export default Profile;
