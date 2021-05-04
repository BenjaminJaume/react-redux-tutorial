import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function HookIceCreamContainer() {
  const numberOfIceCream = useSelector(
    (state) => state.iceCream.numberOfIceCream
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Ice Cream: {numberOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>
        🥧 Buy an ice cream
      </button>
    </div>
  );
}

export default HookIceCreamContainer;
