import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { chair } from "../data/chair";

export default class ItemCard extends Component {
  render() {
    return (
      <View style={styles.flexBox}>
        <View>
          <Image
            source={{
              uri: chair.image
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.descWidth}>
          <Text>{chair.name}</Text>
          <View style={styles.flexBox}>
            <Text style={styles.bold}>${chair.pickupPrice}</Text>
            <Text style={styles.bold}>Qty: 1</Text>
          </View>
          <Text style={styles.crossed}>${chair.price}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexBox: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  image: {
    width: 100,
    height: 100
  },
  descWidth: {
    width: 100
  },
  bold: {
    fontWeight: "bold"
  },
  crossed: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  }
});
