import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import shopkeeperReducer from "./shopkeeper/shopkeeperReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  shopkeeper: shopkeeperReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
