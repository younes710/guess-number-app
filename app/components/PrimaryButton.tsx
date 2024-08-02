import { FC, ReactNode } from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

type TProps = {
 children: ReactNode;
};

const PrimaryButton: FC<TProps> = ({ children }) => {
 const pressHandler = () => {
  console.log('Pressed!');
 };

 return (
  <View style={styles.buttonOuterContainer}>
   <Pressable
    style={({ pressed }) =>
     pressed
      ? [styles.buttonInnerContainer, styles.pressed]
      : styles.buttonInnerContainer
    }
    onPress={pressHandler}
    android_ripple={{ color: '#640233' }}
   >
    <Text style={styles.buttonText}>{children}</Text>
   </Pressable>
  </View>
 );
};

const styles = StyleSheet.create({
 buttonOuterContainer: {
  borderRadius: 28,
  margin: 4,
  overflow: 'hidden',
 },
 buttonInnerContainer: {
  backgroundColor: '#72063c',
  paddingVertical: 8,
  paddingHorizontal: 16,
  elevation: 2,
 },
 buttonText: {
  color: '#fff',
  textAlign: 'center',
 },
 pressed: {
  opacity: 0.75,
 },
});

export default PrimaryButton;
