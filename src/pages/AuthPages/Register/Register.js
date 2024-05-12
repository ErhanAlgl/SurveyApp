import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';

import {Calendar} from 'react-native-calendars';
import styles from './Register.style';
import Button from '../../../component/Button';

const Register = ({navigation}) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const handleGenderSelection = gender => {
    setSelectedGender(gender);
  };

  const isFormValid = () => {
    return (
      email.trim() !== '' &&
      nickname.trim() !== '' &&
      password.trim() !== '' &&
      birthDate.trim() !== ''
    );
  };

  const handleProceed = () => {
    if (!isFormValid()) {
      Alert.alert('Uyarı', 'Lütfen tüm alanları doldurunuz.');
      return;
    }
    navigation.navigate('Kvkk');
  };

  const toggleDatePicker = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  const handleDateChange = date => {
    setBirthDate(date.dateString);
    toggleDatePicker();
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
          <View style={styles.genderContainer}>
            <Text>*Cinsiyetinizi seçin</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.genderButton,
                  selectedGender === 'Erkek' && styles.selectedButton,
                ]}
                onPress={() => handleGenderSelection('Erkek')}>
                <Text>Erkek</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.genderButton,
                  selectedGender === 'Kadın' && styles.selectedButton,
                ]}
                onPress={() => handleGenderSelection('Kadın')}>
                <Text>Kadın</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputRow}>
              <Text style={styles.label}>*Email</Text>
            </View>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.inputRow}>
              <Text style={styles.label}>*Nickname</Text>
            </View>
            <TextInput
              style={styles.input}
              value={nickname}
              onChangeText={setNickname}
            />
            <Text style={styles.subText}>
              Gizliliğinizi önemsiyoruz. Lütfen ad ve soyad girmeden nickname
              oluşturunuz.
            </Text>
            <View style={styles.inputRow}>
              <Text style={styles.label}>*Şifre</Text>
            </View>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Text style={styles.subPassword}>Şifremi Unuttum</Text>
            <View style={styles.inputRow}>
              <Text style={styles.label}>*Doğum Tarihi</Text>
            </View>
            <TouchableOpacity style={styles.input} onPress={toggleDatePicker}>
              <TextInput
                style={styles.dateInput}
                placeholder="GG/AA/YYYY"
                value={birthDate}
                editable={false}
              />
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={isDatePickerVisible}
              onRequestClose={toggleDatePicker}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Calendar
                    current={new Date()}
                    onDayPress={handleDateChange}
                    style={styles.calendarStyle}
                  />
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={toggleDatePicker}>
                    <Text style={styles.textStyle}>Kapat</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.button}>
            <Button
              text="İlerle"
              onPress={handleProceed}
              disabled={!isFormValid()}
              style={[styles.button, !isFormValid() && styles.disabledButton]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;
