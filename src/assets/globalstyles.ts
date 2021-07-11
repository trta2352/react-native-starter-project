import { StyleSheet } from 'react-native';
import { WHITE } from './colors';

const GlobalStyles =  StyleSheet.create({
  mainScreenContainer: {
    flex: 1, 
    margin: 20,
    alignItems: "center",
    backgroundColor: WHITE
  },
  centerContainer: {
    justifyContent: "center", 
    alignItems: "center"
  }, 
  onPressStyle: {
    opacity: 0.3
  }
});


export default GlobalStyles; 