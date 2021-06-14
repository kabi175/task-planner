import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Profile from './components/Profile'
import Tasks from  './components/Tasks'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffb861" hidden={false} />
      <Profile />
      <Tasks />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
