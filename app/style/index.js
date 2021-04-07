import {Dimensions, StyleSheet} from 'react-native';
import Colors from './Colors';
const {width, height} = Dimensions.get('window');

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  centerDiv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteSpace120: {
    height: 120,
  },
  inputLogin: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  labelInputStyleModal: {
    color: Colors.cgBlack,
    fontSize: 12,
    marginBottom: 4,
    fontWeight: 'normal',
  },
  insideInputLogin: {
    marginLeft: 8,
    marginRight: 8,
    color: Colors.cgBlack,
  },
  width90p: {
    width: width * 0.9,
  },
  whiteSpace40: {
    height: 40,
  },
  buttonLogin: {
    width: width * 0.8,
    borderRadius: 30,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: Colors.cgBlack,
    backgroundColor: Colors.blue,
  },
  marginBottom24: {
    marginBottom: 24,
  },
  buttonTitleForgot: {
    color: Colors.cgBlack,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default styles;
