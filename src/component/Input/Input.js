import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';

import styles from './Input.style';

const Input = ({
  value,
  onType,
  title,
  text,
  subText,
  theme,
  secureTextEntry,
}) => {
  return (
    <View>
      <Text style={styles.label}>{text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onType}
        value={value}
        title={title}
        secureTextEntry={secureTextEntry}
      />
      <Text style={styles[theme].text}>{subText}</Text>
    </View>
  );
};

export default Input;

{
  /* <Text text="Nickname" style={styles.label}>Nickname</Text>
                <TextInput style={styles.input} placeholder="" />
                <Text style={styles.subText}>
                  Gizliliğinizi önemsiyoruz. Lütfen ad ve soyad girmeden
                  nickname oluşturunuz.
                </Text>
                <Text style={styles.label}>Şifre</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  placeholder=""
                />
                <Text style={styles.subPassword}>Şifremi Unuttum</Text> */
}
