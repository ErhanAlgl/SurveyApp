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
  overlayTop: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    height: '53%',
    bottom: 0,
  },
  overlayBottom: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '100%',
    height: '130%',
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
    top: 140,
  },
  inputContainer: {
    height: '100%',
    justifyContent: 'center',
    top: '12%',
  },
});
