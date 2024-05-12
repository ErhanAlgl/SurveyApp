import React from 'react';
import {View, Image} from 'react-native';

import styles from './Background.style';

const Background = () => {
  return (
    <View style={styles.innerContainer}>
      <Image
        style={styles.image}
        source={require('../../assets/background.png')}
      />
      <View style={styles.overlay}>
        <View style={styles.line} />
      </View>
    </View>
  );
};

export default Background;
