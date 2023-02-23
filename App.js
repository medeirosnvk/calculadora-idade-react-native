import React from "react";
import { StyleSheet, View } from 'react-native';
import Title from "./src/title/";
import Form from "./src/form";

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61dafb',
    paddingTop: 60,
    paddingBottom: 40,
  }
})
