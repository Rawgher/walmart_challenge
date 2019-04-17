import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Tooltip extends Component {
  render() {
    return (
      <View style={[styles.arrowUp, styles.triangle]}>
        <View style={styles.tooltipStyle}>
          <Text style={styles.whiteText}>
            Picking up your order in the store helps cut costs, and we pass the
            savings on to you!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tooltipStyle: {
    width: 150,
    height: 100,
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    fontWeight: "bold",
    backgroundColor: "black",
    marginLeft: -70
  },
  arrowUp: {
    borderTopWidth: 0,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "black",
    borderLeftColor: "transparent",
    marginLeft: 35
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid"
  },
  whiteText: {
    color: "#F2F2F2"
  }
});
