import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item: {props.item}</h2>
      <button onClick={props.dispatchFunction}>
        Buy {props.value === "iceCream" ? "an ice cream" : "a cake"}
      </button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  switch (ownProps.value) {
    case "cake":
      return { item: state.cake.numberOfCakes };
    case "iceCream":
      return { item: state.iceCream.numberOfIceCream };
    default:
      return { item: state.cake.numberOfCakes };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  switch (ownProps.value) {
    case "cake":
      return { dispatchFunction: () => dispatch(buyCake()) };
    case "iceCream":
      return { dispatchFunction: () => dispatch(buyIceCream()) };
    default:
      return { dispatchFunction: () => dispatch(buyCake()) };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
