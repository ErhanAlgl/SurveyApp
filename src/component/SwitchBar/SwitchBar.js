import React from 'react';
import {View, Text} from 'react-native';
import {Switch} from 'react-native-paper';

import styles from './SwitchBar.style';

const SwitchBar = ({text, value, onValueChange}) => {
  const onToggleSwitch = () => {
    onValueChange(!value);
  };

  return (
    <View style={styles.switch}>
      <Switch value={value} onValueChange={onToggleSwitch} />
      <Text style={styles.KvkkSubText}>{text}</Text>
    </View>
  );
};

export default SwitchBar;
