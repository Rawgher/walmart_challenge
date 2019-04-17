import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Tooltip from "./Tooltip";

export default class Pricing extends Component {
  render() {
    return (
      <View style={styles.sectionSpacing}>
        <View style={styles.flexBox}>
          <Text>Subtotal</Text>
          <Text style={styles.boldFont}>${this.props.subTotal}</Text>
        </View>
        <View style={styles.flexBox}>
          <View style={styles.tooltipFlexBox}>
            <TouchableOpacity onPress={this.props.showTooltip}>
              <Text style={styles.decoration}>Pickup savings</Text>
            </TouchableOpacity>
            {this.props.showTooltipState ? <Tooltip /> : null}
          </View>
          <Text style={[styles.redText, styles.boldFont]}>
            -${this.props.pickUpSaving}
          </Text>
        </View>
        <View style={[styles.flexBox, styles.paddingBot]}>
          <Text style={styles.estTaxView}>
            Est. taxes & fees (Based on 94085)
          </Text>
          <Text style={styles.boldFont}>${this.props.taxes}</Text>
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
  estTaxView: {
    width: 150
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
  tooltipFlexBox: {
    flexDirection: "column"
  },
  redText: {
    color: "red"
  },
  boldFont: {
    fontWeight: "bold"
  }
});
