import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const thunkMiddleWare = require("redux-thunk").default;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunkMiddleWare))
);

export default store;
