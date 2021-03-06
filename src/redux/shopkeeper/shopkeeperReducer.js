import { CHANGE_SHOPKEEPER_NAME } from "./shopkeeperTypes";
import { initialState } from "../initialState";

const shopkeeperReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SHOPKEEPER_NAME:
      return {
        ...state,
        shopkeeperName: action.payload.shopkeeperName,
        age: action.payload.age,
      };
    default:
      return state;
  }
};

export default shopkeeperReducer;
