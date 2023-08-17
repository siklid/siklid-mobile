import {Dimensions} from 'react-native';

export default {
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 5,
    md: 10,
    lg: 15,
    xl: 20,
  },
  device: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
};
