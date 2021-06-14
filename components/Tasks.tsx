import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Task from "./Task";

const todoIcon = {
  name: "spinner-3",
  type: "evilicon",
  color: "red",
};

const progressIcon = {
  name: "check-circle",
  type: "font-awesome",
  color: "orange",
};
const doneIcon = {
  name: "alarm-outline",
  type: "ionicon",
  color: "lightblue",
};
const Tasks: React.FC = () => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.title}> My Tasks </Text>
      <View style={styles.tasks}>
        <Task task={"To Do"} status={"0  Added"} icon={todoIcon} />
        <Task task={"In Progress"} status={"0  Added"} icon={progressIcon} />
        <Task task={"Done "} status={"0  Added"} icon={doneIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    backgroundColor: "white",
    width: "100%",
    height: "35%",
    paddingTop: 15,
    paddingLeft: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  tasks: {
    flex: 1,
    paddingTop: 15,
  },
});

export default Tasks;
