import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

interface props {
  task: string;
  status: string;
  icon: {
    name: string;
    type: string;
    color: string;
  };
}

const Task: React.FC<props> = ({ icon, task, status }) => {
  return (
    <View style={styles.contanier}>
      <Icon reverse name={icon.name} type={icon.type} color={icon.color} />
      <View>
        <Text style={styles.title}> {task} </Text>
        <Text style={styles.status}> {status} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  status: {
    fontWeight: "100",
  },
});

export default Task;
