import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import styles from './Login.style';
import Button from '../../../component/Button';
import Input from '../../../component/Input';

import usePost from '../../../hooks/usePost';
import {API_AUTH_URL} from '../../../../data';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const {data, error, post} = usePost();
  const dispatch = useDispatch();

  function handleLogin(values) {
    post(API_AUTH_URL + '/login', values);
  }

  if (error) {
    Alert.alert('Hata', 'Bir Hata Oluştu');
  }
  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Hata', 'Kullanıcı bulunamadı');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
      navigation.navigate('Landing');
    }
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/background.png')}
        />
        <Formik
          initialValues={{username: '', password: ''}}
          onSubmit={handleLogin}>
          {({handleSubmit, handleChange, values}) => (
            <View style={styles.overlay}>
              <View style={styles.line} />
              <Text style={styles.text}>Hoşgeldiniz</Text>
              <View style={styles.inputContainer}>
                <Input
                  text="Nickname"
                  subText="Gizliliğinizi önemsiyoruz. Lütfen ad ve soyad girmeden
                nickname oluşturunuz."
                  theme="primary"
                  value={values.username}
                  onType={handleChange('username')}
                />
                <Input
                  secureTextEntry
                  theme="secondary"
                  text="Şifre"
                  subText="Şifremi Unuttum."
                  value={values.password}
                  onType={handleChange('password')}
                />
              </View>
              <Button
                text="Giriş Yap"
                subText="Üye değil misiniz?"
                subRegisterText="Hesap Oluştur"
                onPress={handleSubmit}
                onPressRegister={() => navigation.navigate('Register')}
              />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Login;

const user = {
  address: {
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'john',
    lastname: 'doe',
  },
  phone: '1-570-236-7033',
  __v: 0,
};
