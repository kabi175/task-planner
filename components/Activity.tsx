import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Card from './Card';
import { CardColors } from './colors';

const cards = [
  {
    task: 'Activity Tracker',
    progress: 70,
  },
  {
    task: 'b',
    progress: 20,
  },
  {
    task: 'c',
    progress: 50,
  },
  {
    task: 'd',
    progress: 90,
  },
];

const Activity: React.FC = () => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.title}> Active Projects </Text>
      <ScrollView horizontal={true}>
        {cards.map((card, id) => {
          return (
            <TouchableOpacity
              key={id}
              onPress={() => console.log('Activity card clicked')}
            >
              <Card {...card} {...CardColors[id % CardColors.length]} />
            </TouchableOpacity>
          );
        })}
        <View style={styles.space} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 20,
    padding: 20,
  },
  space: {
    height: 10,
    width: 20,
  },
});

export default Activity;
