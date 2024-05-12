import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  label: {
    paddingTop: 15,
    paddingBottom: 5,
  },
  input: {
    padding: 15,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 7,
  },
  primary: StyleSheet.create({
    text: {
      top: 5,
      fontSize: 10,
    },
  }),
  secondary: StyleSheet.create({
    text: {
      alignSelf: 'flex-end',
      top: 5,
      fontSize: 10,
      color: 'rgba(120, 120, 120, 1)',
    },
  }),
});
