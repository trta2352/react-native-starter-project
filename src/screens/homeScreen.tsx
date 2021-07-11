import React, { useState } from 'react'; 

import { Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyles from '../assets/globalstyles';

interface NotesScreenProps {
  navigation: any
}

const HomeScreen = ({navigation}: NotesScreenProps) =>{
  return(
    <SafeAreaView style={GlobalStyles.mainScreenContainer}>
      <Text>Home screen</Text>
    </SafeAreaView>
  );
}

export default HomeScreen; 

const styles = StyleSheet.create({
})