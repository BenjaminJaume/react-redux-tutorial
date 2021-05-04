import { BUY_CAKE } from "./cakeTypes";
import { initialState } from "../initialState";

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
