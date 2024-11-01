import {
 DarkTheme,
 DefaultTheme,
 ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import StartGameScreen from './start-game/StartGameScreen';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './game-screen/GameScreen';
import Colors from './utils/colors';
import GameOverScreen from './game-over/GameOverScreen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
 const colorScheme = useColorScheme();
 const [loaded] = useFonts({
  SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
 });
 const [userNumber, setUserNumber] = useState(0);
 const [gameIsOver, setGameIsOver] = useState(true);

 const handlePickedNumber = (pickedNumber: number) => {
  setUserNumber(pickedNumber);
  setGameIsOver(false);
 };

 const gameOverHandler = () => {
  setGameIsOver(true);
 };

 let screen = <StartGameScreen onPickedNumber={handlePickedNumber} />;

 if (userNumber) {
  screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
 }

 if (userNumber && gameIsOver) {
  screen = <GameOverScreen />;
 }

 useEffect(() => {
  if (loaded) {
   SplashScreen.hideAsync();
  }
 }, [loaded]);

 if (!loaded) {
  return null;
 }

 return (
  <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
   <LinearGradient
    colors={[Colors.primary700, Colors.accent500]}
    style={styles.container}
   >
    <ImageBackground
     source={require('../assets/images/background.png')}
     resizeMode='cover'
     style={styles.container}
     imageStyle={styles.backgroundImage}
    >
     {/* safe area for iphone */}
     <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
    </ImageBackground>
   </LinearGradient>
  </ThemeProvider>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
 },
 backgroundImage: {
  opacity: 0.15,
 },
});
