import React, {useState} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import styles from './Kvkk.style';
import Button from '../../../component/Button';
import SwitchBar from '../../../component/SwitchBar';

const Kvkk = ({navigation}) => {
  const [switch1Checked, setSwitch1Checked] = useState(false);
  const [switch2Checked, setSwitch2Checked] = useState(false);
  const [switch3Checked, setSwitch3Checked] = useState(false);

  const handleSwitch1Change = value => {
    setSwitch1Checked(value);
  };

  const handleSwitch2Change = value => {
    setSwitch2Checked(value);
  };

  const handleSwitch3Change = value => {
    setSwitch3Checked(value);
  };

  const handleProceed = () => {
    if (!(switch1Checked && switch2Checked)) {
      Alert.alert('Lütfen tüm gerekli alanları seçiniz.');
      return;
    }
    navigation.navigate('Landing');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/background.png')}
        />
        <View style={styles.overlay}>
          <View style={styles.line} />
          <Text style={styles.text}>Hassas Veriler Hakkında</Text>
          <Text style={styles.KvkkText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has been the industry's
          </Text>
          <View style={styles.inputContainer}>
            <SwitchBar
              onValueChange={handleSwitch1Change}
              value={switch1Checked}
              text="*Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and? Kabul Ediyorum:"
            />
            <SwitchBar
              onValueChange={handleSwitch2Change}
              value={switch2Checked}
              text="*Lorem Ipsum is simply dummy text of the printing and typesetting industry. Kabul ediyorum:"
            />
            <SwitchBar
              onValueChange={handleSwitch3Change}
              value={switch3Checked}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
          </View>
          <Button text="İlerle" onPress={handleProceed} />
        </View>
      </View>
    </View>
  );
};

export default Kvkk;
