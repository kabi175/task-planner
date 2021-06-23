import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card';
const Activity: React.FC = () => {
  return (
    <View style={styles.contanier}>
      <Text> Active Projects </Text>
      <Card name={'Activity Tracker'} />
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: 'wheat',
    width: '100%',
    padding: 25,
  },
});

export default Activity;
