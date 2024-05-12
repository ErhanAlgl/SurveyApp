import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import styles from './Button.style';

const Button = ({text, onPress, subText, subRegisterText, onPressRegister}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.title}>{text}</Text>
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <Text style={styles.subTitle}>{subText}</Text>
        <Text style={styles.subRegisterTitle} onPress={onPressRegister}>
          {' '}
          {subRegisterText}
        </Text>
      </View>
    </View>
  );
};

export default Button;
