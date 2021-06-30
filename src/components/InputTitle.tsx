import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const Title: React.FC<{ title: string; update: (newstate: string) => void }> =
  ({ title, update }) => {
    return (
      <View style={styles.contanier}>
        <TextInput style={styles.title} onChangeText={update}>
          {title}
        </TextInput>
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
