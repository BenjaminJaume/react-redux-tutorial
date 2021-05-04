import wordDefinitionTypes from "./wordDefinitionTypes";
import axios from "axios";

export const fetchDataRequest = () => {
  return {
    type: wordDefinitionTypes.FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: wordDefinitionTypes.FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFail = (error) => {
  return {
    type: wordDefinitionTypes.FETCH_DATA_FAIL,
    payload: error,
  };
};

export const fetchData = (url, selectedLanguage, word) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get(`${url}${selectedLanguage}/${word}`)
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchDataFail(error));
      });
  };
};
