import React from 'react';
import {View, Text, Image} from 'react-native';

import Button from '../../../component/Button';
import styles from './Home.style';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/background.png')}
        />
        <View style={styles.overlayTop}>
          <View style={styles.overlayBottom}>
            <Text style={styles.text}>Merhaba: Erhan</Text>
            <View style={styles.inputContainer}>
              <Button text="ANKETE BAŞLA" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
