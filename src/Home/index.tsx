import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Profile from './components/Profile';
import Tasks from './components/Tasks';
import Activity from './components/Activity';

const App: React.FC = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffb861" hidden={false} />
      <Profile />
      <Tasks />
      <Activity nav={props.navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;
