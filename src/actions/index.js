import axios from "axios";

import {
  NEWS_FETCHED,
  NEWS_LOADED,
  NEWS_LIST_ADDED,
  HIDE_ITEM,
  SET_ACTIVE_LIST,
  HIDE_TAB
} from "./actionTypes";

const apiKey = "630dbc40ba184caab3b5889ee87a62c9";
const url = `https://newsapi.org/v2/everything`;

export const fetchNews = keyword => {
  const requestURL = `${url}?q=${keyword}&apiKey=${apiKey}`;

  return (dispatch, getState) => {
    dispatch({
      type: NEWS_LOADED,
      loading: true
    });

    const request = axios({
      method: "GET",
      url: requestURL
    });

    request.then(result => {
      if (result && result.data && result.data.status === "ok") {
        dispatch({
          type: NEWS_FETCHED,
          payload: result.data.articles
        });

        dispatch({
          type: NEWS_LIST_ADDED,
          keyword: keyword,
          activeList: 0,
          results: result.data.articles
        });
      }
    });
  };
};

export const hideTab = index => {
  return dispatch => {
    dispatch({
      type: HIDE_TAB,
      index
    });
  };
};

export const hideTabListItem = index => {
  return dispatch => {
    dispatch({
      type: HIDE_ITEM,
      hidden: false,
      index
    });
  };
};

export const setActiveList = index => {
  return dispatch => {
    dispatch({
      type: SET_ACTIVE_LIST,
      index
    });
  };
};
