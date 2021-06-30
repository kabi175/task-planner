import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
//import HomeScreen  from './src/Home/index';
import Modal from './src/shared/ModelComponent';
import List from './src/shared/ListComponent';
import Card from './src/shared/CardComponent';
import LabelTitle from './src/components/InputTitle';

const App: React.FC = () => {
  const [isVisible, close] = React.useState<boolean>(true);
  const [title, update] = React.useState<string>('todo');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffb861" hidden={false} />
      <Modal
        title={<LabelTitle title={title} update={update} />}
        body={
          <List
            Item={Card}
            List={[
              { name: 'Hello', id: 1 },
              { name: 'Hello', id: 2 },
            ]}
          />
        }
        isVisible={isVisible}
        close={close}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    width: '100%',
  },
});

export default App;
