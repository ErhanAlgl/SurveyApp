import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
  text: {
    color: 'rgba(29, 29, 27, 1)',
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'center',
    top: 145,
  },
  inputContainer: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
  },
  line: {
    position: 'absolute',
    top: 10,
    width: '7%',
    height: 3,
    borderRadius: 15,
    backgroundColor: 'rgba(109, 109, 109, 1)',
  },
});
