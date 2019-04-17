import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Tooltip extends Component {
  render() {
    return (
      <View style={styles.tooltipStyle}>
        <Text>
          Picking up your order in the store helps cut costs, and we pass the
          savings on to you!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tooltipStyle: {
    width: 200,
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    padding: 1,
    marginTop: 2
  }
});
