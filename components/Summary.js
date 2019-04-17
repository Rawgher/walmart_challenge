import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { discountApplied } from "../store/actions/index";
import Discount from "./Discount";
import ItemCard from "./ItemCard";
import Tooltip from "./Tooltip";
class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showItemDetails: false,
      showPromoInput: false,
      showTooltip: false,
      taxes: 8.92,
      pickUpSaving: 3.85,
      subTotal: 102.96,
      estTotal: 108.03,
      stopDiscount: false
    };
  }

  toggleItemDetails = () => {
    this.setState({
      showItemDetails: !this.state.showItemDetails
    });
  };

  togglePromoInput = () => {
    this.setState({
      showPromoInput: !this.state.showPromoInput
    });
  };

  showTooltip = () => {
    this.setState({
      showTooltip: !this.state.showTooltip
    });
  };

  giveDiscount = () => {
    if (this.props.discountCode == "DISCOUNT" || "discount") {
      this.setState(
        { estTotal: this.state.estTotal * 0.9 },
        this.setState({
          stopDiscount: true
        })
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionSpacing}>
          <View style={styles.flexBox}>
            <Text>Subtotal</Text>
            <Text style={styles.boldFont}>${this.state.subTotal}</Text>
          </View>
          <View style={styles.flexBox}>
            <View style={styles.tooltipFlexBox}>
              <TouchableOpacity onPress={this.showTooltip}>
                <Text style={styles.decoration}>Pickup savings</Text>
              </TouchableOpacity>
              {this.state.showTooltip ? <Tooltip /> : null}
            </View>
            <Text style={[styles.redText, styles.boldFont]}>
              -${this.state.pickUpSaving}
            </Text>
          </View>
          <View style={[styles.flexBox, styles.paddingBot]}>
            <Text style={styles.estTaxView}>
              Est. taxes & fees (Based on 94085)
            </Text>
            <Text style={styles.boldFont}>${this.state.taxes}</Text>
          </View>
        </View>
        <View style={styles.sectionSpacing}>
          <View style={styles.flexBox}>
            <Text style={styles.estTotalSize}>Est. Total</Text>
            <Text style={styles.estTotalSize}>${this.state.estTotal}</Text>
          </View>
          <View style={styles.paddingBot}>
            <TouchableOpacity onPress={this.toggleItemDetails}>
              <View style={styles.flexBoxNoSpace}>
                <Text style={[styles.decoration, styles.padRight]}>
                  {this.state.showItemDetails ? "Hide" : "See"} item details
                </Text>
                <Text>{this.state.showItemDetails ? "-" : "+"}</Text>
              </View>
            </TouchableOpacity>
            {this.state.showItemDetails ? <ItemCard /> : null}
          </View>
        </View>
        <View style={styles.marginTop}>
          <TouchableOpacity onPress={this.togglePromoInput}>
            <View style={styles.flexBoxNoSpace}>
              <Text style={[styles.decoration, styles.padRight]}>
                {this.state.showPromoInput ? "Hide" : "Apply"} promo code
              </Text>
              <Text>{this.state.showPromoInput ? "-" : "+"}</Text>
            </View>
          </TouchableOpacity>
          {this.state.showPromoInput ? (
            <Discount
              applyDiscount={() => this.giveDiscount()}
              disableButton={this.state.stopDiscount}
            />
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 75,
    marginRight: 75,
    marginTop: 20,
    width: 250
  },
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
  marginTop: {
    marginTop: 20
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
  tooltipFlexBox: {
    flexDirection: "column"
  },
  estTotalSize: {
    fontSize: 25,
    fontWeight: "bold"
  },
  redText: {
    color: "red"
  },
  boldFont: {
    fontWeight: "bold"
  }
});

const mapStateToProps = state => ({
  discountCode: state.discountCode.value
});

export default connect(
  mapStateToProps,
  { discountApplied }
)(Summary);
