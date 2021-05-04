import { BUY_ICECREAM } from "./iceCreamTypes";
import { initialState } from "../initialState";

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
