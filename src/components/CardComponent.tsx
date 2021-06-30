import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

interface CardPropsType {
  name: string;
  id: number;
}

const Card: React.FC<CardPropsType> = ({ name, id }) => {
  return (
    <TouchableOpacity style={styles.contanier}>
      <Text style={styles.task}> {name} </Text>
      <TouchableOpacity style={styles.trash} onPress={() => console.log(id)}>
        <Icon name="trash" type="entypo" color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 0,
    flexDirection: 'row',
    width: 250,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  task: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'notoserif',
  },
  trash: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 40,
    position: 'relative',
    backgroundColor: 'black',
  },
});

export default Card;
