import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import { ICardColor } from './colors';

interface ICard extends ICardColor {
  task: string;
  progress: number;
}

const Card: React.FC<ICard> = ({ task, progress, bg, bar }) => {
  return (
    <View style={{ ...styles.contanier, backgroundColor: bg }}>
      <Text style={styles.progress}> {progress}% </Text>
      <View style={styles.progressBar}>
        <AnimatedProgressWheel
          progress={progress}
          animateFromValue={0}
          duration={1500}
          color={'white'}
          backgroundColor={bar}
          size={85}
          width={7}
          border={50}
        />
      </View>
      <Text style={styles.task}>{task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    position: 'relative',
    width: 160,
    height: 220,
    borderRadius: 50,
    marginStart: 20,
  },
  progress: {
    position: 'absolute',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    left: 50,
    top: 55,
  },
  progressBar: {
    transform: [{ rotate: '-90deg' }],
    top: -10,
    left: -10,
  },
  task: {
    position: 'absolute',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    left: 20,
    bottom: 35,
  },
});

export default Card;
