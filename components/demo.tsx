import React from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';

const Demo: React.FC = () => {
  const [pos, _] = React.useState(new Animated.ValueXY({ x: 0, y: 0 }));
  const handle = () => {
    Animated.timing(pos, {
      toValue: { x: 40, y: 100 },
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <TouchableOpacity onPress={handle}>
      <View>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'green',
            transform: pos.getTranslateTransform(),
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Demo;
