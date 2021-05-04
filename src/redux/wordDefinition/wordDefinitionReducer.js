import wordDefinitionTypes from "./wordDefinitionTypes";
import { initialState } from "../initialState";

const wordDefinitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case wordDefinitionTypes.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case wordDefinitionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };

    case wordDefinitionTypes.FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default wordDefinitionReducer;
