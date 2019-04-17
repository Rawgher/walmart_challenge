import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";
import { discountApplied } from "../store/actions/index";

class Discount extends Component {
  constructor(props, context) {
    super(props, context);
  }
  discountApplied = e => {
    this.props.discountApplied(e);
  };

  render() {
    return (
      <View>
        <View>
          <Text>Promo Code</Text>
        </View>
        <View style={styles.flexBox}>
          <TextInput
            style={styles.inputBorder}
            value={this.props.discountCode}
            onChange={this.discountApplied}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.props.applyDiscount}
            disabled={this.props.disableButton}
          >
            <Text style={styles.buttonText}> Apply </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBorder: {
    borderColor: "#D3D3D3",
    borderWidth: 1,
    width: 170,
    marginRight: 10
  },
  flexBox: {
    flexDirection: "row"
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 150,
    justifyContent: "center"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    padding: 15
  }
});

const mapStateToProps = state => ({
  discountCode: state.discountCode.value
});

// const mapStateToProps = dispatch => {
//   return {
//     discountApplied: text => dispatch({ type: "DISCOUNT_APPLIED", text })
//   };
// };

export default connect(
  mapStateToProps,
  { discountApplied }
)(Discount);
