import { ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../utils/colors';

type TProps = {
 children: ReactNode;
};

const Title = ({ children }: TProps) => {
 return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
 title: {
  fontSize: 24,
  fontWeight: 'bold',
  color: Colors.accent500,
  textAlign: 'center',
  padding: 12,
  borderWidth: 2,
  borderColor: Colors.accent500,
  borderRadius: 8,
 },
});

export default Title;
