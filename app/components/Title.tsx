import { ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';

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
  color: '#ddb52f',
  textAlign: 'center',
  padding: 12,
  borderWidth: 2,
  borderColor: '#ddb52f',
  borderRadius: 8,
 },
});

export default Title;
