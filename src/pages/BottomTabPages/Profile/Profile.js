import React from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import {useDispatch} from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch({type: 'REMOVE_USER'});
  };

  return (
    <SafeAreaView>
      <Text>Çıkış Yap</Text>
      <Button title="Log Out" onPress={handleLogOut} />
    </SafeAreaView>
  );
};

export default Profile;
