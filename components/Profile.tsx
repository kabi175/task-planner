import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile: React.FC = () => {
  return (
    <View style={styles.contanier}>
      <View style={styles.profile}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/67632223?v=4',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.about}>
        <Text style={styles.name}> Kabilan </Text>
        <Text style={styles.title}> Web Developer </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    backgroundColor: '#f5ba7a',
    width: '100%',
    height: 170,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  profile: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  about: {
    padding: 20,
    justifyContent: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
  },
});

export default Profile;
