import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Ice Cream {props.numberOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy an ice cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfIceCream: state.iceCream.numberOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
