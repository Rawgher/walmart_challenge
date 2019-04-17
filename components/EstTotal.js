import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ItemCard from "./ItemCard";

export default class EstTotal extends Component {
  render() {
    return (
      <View style={styles.sectionSpacing}>
        <View style={styles.flexBox}>
          <Text style={styles.estTotalSize}>Est. Total</Text>
          <Text style={styles.estTotalSize}>
            ${this.props.estTotal.toFixed(2)}
          </Text>
        </View>
        <View style={styles.paddingBot}>
          <TouchableOpacity onPress={this.props.toggleItemDetails}>
            <View style={styles.flexBoxNoSpace}>
              <Text style={[styles.decoration, styles.padRight]}>
                {this.props.showItemDetails ? "Hide" : "See"} item details
              </Text>
              <Text>{this.props.showItemDetails ? "-" : "+"}</Text>
            </View>
          </TouchableOpacity>
          {this.props.showItemDetails ? <ItemCard /> : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5
  },
  sectionSpacing: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    marginTop: 20
  },
  paddingBot: {
    paddingBottom: 30
  },
  decoration: {
    textDecorationLine: "underline"
  },
  flexBoxNoSpace: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5
  },
  padRight: {
    paddingRight: 5
  },
  estTotalSize: {
    fontSize: 25,
    fontWeight: "bold"
  }
});
