import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import shopkeeperReducer from "./shopkeeper/shopkeeperReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import wordDefinitionReducer from "./wordDefinition/wordDefinitionReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  shopkeeper: shopkeeperReducer,
  iceCream: iceCreamReducer,
  wordDefinition: wordDefinitionReducer,
});

export default rootReducer;
