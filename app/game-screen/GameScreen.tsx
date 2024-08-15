import { Text, View, StyleSheet, StatusBar, Platform } from 'react-native';

const GameScreen = () => {
 return (
  <View style={styles.container}>
   <StatusBar barStyle={'light-content'} />
   <Text>Opponent's Guess</Text>
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
