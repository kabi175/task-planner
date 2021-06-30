import React from 'react';
import { View } from 'react-native';

interface ListPropsType {
  List: object[];
  Item:any;
}

const List: React.FC<ListPropsType> = ({ List, Item }) => {
  return (
    <View>
      {List.map((props, id) => (
        <Item key={id} {...props} />
      ))}
    </View>
  );
};

export default List;
