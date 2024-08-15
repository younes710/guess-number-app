import {
 DarkTheme,
 DefaultTheme,
 ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import StartGameScreen from './start-game/StartGameScreen';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
 const colorScheme = useColorScheme();
 const [loaded] = useFonts({
  SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
 });

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
   <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
    <ImageBackground
     source={require('../assets/images/background.png')}
     resizeMode='cover'
     style={styles.container}
     imageStyle={styles.backgroundImage}
    >
     <StartGameScreen />
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
