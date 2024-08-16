import { Text, View, StyleSheet, StatusBar, Platform } from 'react-native';
import Title from '../components/Title';

const GameScreen = () => {
 return (
  <View style={styles.container}>
   <StatusBar barStyle={'light-content'} />
   <Title>Opponent's Guess</Title>
   <View>
    <Text>Higher or lower ?</Text>
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
