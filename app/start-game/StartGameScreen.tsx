import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

const StartGameScreen = () => {
 const [enteredNumber, setEnteredNumber] = useState('');

 const handlePressReset = () => {
  setEnteredNumber('');
 };

 const handlePressConfirm = () => {
  const chosenNumber = parseInt(enteredNumber);

  if (isNaN(chosenNumber) || chosenNumber <= 0) {
   Alert.alert(
    'Invalid number !',
    'Number has to be a number between 1 and 99.',
    [{ text: 'Okay', style: 'destructive', onPress: handlePressReset }]
   );
   return;
  }
 };

 return (
  <View style={styles.inputContainer}>
   <StatusBar style='light' />
   <TextInput
    style={styles.numberInput}
    keyboardType='number-pad'
    maxLength={2}
    autoCapitalize='none'
    autoCorrect={false}
    value={enteredNumber}
    onChangeText={(text) => setEnteredNumber(text)}
   />
   <View style={styles.buttonsContainer}>
    <View style={styles.buttonContainer}>
     <PrimaryButton onPress={handlePressReset}>Reset</PrimaryButton>
    </View>
    <View style={styles.buttonContainer}>
     <PrimaryButton onPress={handlePressConfirm}>Confirm</PrimaryButton>
    </View>
   </View>
  </View>
 );
};

const styles = StyleSheet.create({
 inputContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 100,
  marginHorizontal: 24,
  padding: 16,
  backgroundColor: '#3b021f',
  borderRadius: 8,
  // * elevation for android shadow
  elevation: 4,
  // * IOS shadow
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  shadowOpacity: 0.25,
 },
 numberInput: {
  height: 50,
  width: 50,
  fontSize: 32,
  borderBottomColor: '#ddb52f',
  borderBottomWidth: 2,
  color: '#ddb52f',
  marginVertical: 8,
  fontWeight: 'bold',
  textAlign: 'center',
 },
 buttonsContainer: {
  flexDirection: 'row',
 },
 buttonContainer: {
  flex: 1,
 },
});

export default StartGameScreen;
