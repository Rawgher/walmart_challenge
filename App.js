import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Summary from "./components/Summary";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Summary />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
