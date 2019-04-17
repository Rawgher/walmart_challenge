import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { handleChange } from "../store/actions/discountCodeActions";
import Discount from "./Discount";
import EstTotal from "./EstTotal";
import Pricing from "./Pricing";
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
    if (this.props.discountCode === "DISCOUNT") {
      this.setState({ estTotal: this.state.estTotal * 0.9 }, function() {
        this.setState({
          stopDiscount: true
        });
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Pricing
          subTotal={this.state.subTotal}
          showTooltip={() => this.showTooltip()}
          showTooltipState={this.state.showTooltip}
          pickUpSaving={this.state.pickUpSaving}
          taxes={this.state.taxes}
        />

        <EstTotal
          toggleItemDetails={() => this.toggleItemDetails()}
          showItemDetails={this.state.showItemDetails}
          estTotal={this.state.estTotal}
        />

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
  { handleChange }
)(Summary);
