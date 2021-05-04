import { combineReducers, createStore } from "redux";

import cakeReducer from "./cake/cakeReducer";
import shopkeeperReducer from "./shopkeeper/shopkeeperReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  shopkeeper: shopkeeperReducer,
});

const store = createStore(rootReducer);

export default store;
