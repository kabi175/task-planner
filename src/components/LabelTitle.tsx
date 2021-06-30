import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Title:React.FC< {title: string }>= ({ title }) => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    borderColor: '#271d80',
    borderTopWidth: 5,
    borderRightWidth: 10,
    borderBottomWidth: 7,
    borderLeftWidth: 5,
    padding: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    textTransform: 'uppercase',
    color: '#271d80',
  },
});

export default Title;
