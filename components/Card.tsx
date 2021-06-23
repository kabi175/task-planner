import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';

const Card: React.FC<{ name: string }> = ({ name }) => {
  return (
    <View style={styles.contanier}>
      <Text>{name}</Text>
      <View style={styles.progress}>
        <AnimatedProgressWheel
          progress={50}
          animateFromValue={0}
          duration={1000}
          color={'#98e3ca'}
          backgroundColor={'white'}
          size={80}
          width={7}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#66cdaa',
    width: 175,
    height: 250,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    transform: [{ rotate: '-90deg' }],
  },
});

export default Card;
