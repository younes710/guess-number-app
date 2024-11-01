import {
 Text,
 View,
 StyleSheet,
 StatusBar,
 Platform,
 Alert,
} from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

const generateRandomBetween = (min: number, max: number, exclude: number) => {
 const rndNum = Math.floor(Math.random() * (max - min) + min);

 if (rndNum == exclude) {
  return generateRandomBetween(min, max, exclude);
 } else {
  return rndNum;
 }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({
 userNumber,
 onGameOver,
}: {
 userNumber: number;
 onGameOver: () => void;
}) => {
 const initialGuess = generateRandomBetween(1, 100, userNumber);
 const [currentGuess, setCurrentGuess] = useState(initialGuess);

 useEffect(() => {
  if (currentGuess == userNumber) {
   onGameOver();
  }
 }, [currentGuess, userNumber, onGameOver]);

 const nextGuessHandler = (direction: 'lower' | 'greater') => {
  if (
   (direction == 'lower' && currentGuess < userNumber) ||
   (direction == 'greater' && currentGuess > userNumber)
  ) {
   Alert.alert("Don't lie!", 'You know that this is wrong...', [
    {
     text: 'Sorry!',
     style: 'cancel',
    },
   ]);
   return;
  }

  if (direction == 'lower') {
   maxBoundary = currentGuess - 1;
  } else {
   minBoundary = currentGuess + 1;
  }
  const newRndNumber = generateRandomBetween(
   minBoundary,
   maxBoundary,
   currentGuess
  );
  setCurrentGuess(newRndNumber);
 };

 return (
  <View style={styles.container}>
   <StatusBar barStyle={'light-content'} />
   <Title>Opponent's Guess</Title>
   <NumberContainer>{currentGuess}</NumberContainer>
   <View>
    <Text>Higher or lower ?</Text>
    <View>
     <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
     <PrimaryButton onPress={() => nextGuessHandler('greater')}>
      +
     </PrimaryButton>
    </View>
   </View>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  padding: 12,
 },
});

export default GameScreen;
