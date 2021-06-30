import React from 'react';
import { View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

interface PropsType {
  title: any;
  body: any;
  isVisible: boolean;
  close: (close: boolean) => void;
  AddIcon?: React.FC | undefined;
}

const CusModal: React.FC<PropsType> = ({
  title,
  body,
  isVisible,
  close,
  AddIcon,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      style={styles.contanier}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={() => close(false)}>
          <Icon name="arrow-left" type="entypo" color="black" size={40} />
        </TouchableOpacity>
        {title}
      </View>
      <View style={styles.body}>
        {AddIcon ? <AddIcon /> : <></>}
        <TouchableOpacity style={styles.add}>
          <Icon name="pencil" type="entypo" color="black" size={40} />
        </TouchableOpacity>
        {body}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: 'white',
    height: 150,
    width: '100%',
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    position: 'absolute',
    left: 5,
    top: 10,
  },
  add: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#3f5bb0',
  },
  body: {
    flex: 0,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#234659',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    flexGrow: 1,
    padding: 50,
  },
});

export default CusModal;
