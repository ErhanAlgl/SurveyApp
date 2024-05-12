import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    height: '70%',
    bottom: 0,
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    width: '70%',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 5,
    paddingTop: 15,
  },
  label: {},
  input: {
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 7,
  },
  subText: {
    top: 5,
    fontSize: 10,
  },
  subPassword: {
    alignSelf: 'flex-end',
    top: 5,
    fontSize: 10,
    color: 'rgba(120, 120, 120, 1)',
  },
  line: {
    position: 'absolute',
    top: 10,
    width: '7%',
    height: 3,
    borderRadius: 15,
    backgroundColor: 'rgba(109, 109, 109, 1)',
  },
  button: {
    top: 175,
  },
  genderContainer: {},
  buttonContainer: {
    flexDirection: 'row',
    width: '73%',
  },
  genderButton: {
    flex: 1,
    padding: 10,
    margin: 3,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  selectedButton: {
    borderColor: '#808080',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
    color: 'blue',
  },
});
