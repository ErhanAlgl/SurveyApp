import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
  line: {
    position: 'absolute',
    top: 10,
    width: '7%',
    height: 3,
    borderRadius: 15,
    backgroundColor: 'rgba(109, 109, 109, 1)',
  },
});
