import { BUY_CAKE } from "./cakeTypes";
import { initialState } from "../initialState";

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload.numberCakesToBuy,
      };
    default:
      return state;
  }
};

export default cakeReducer;
