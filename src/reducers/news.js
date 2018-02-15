import {
  NEWS_FETCHED,
  NEWS_LOADED,
  NEWS_LIST_ADDED,
  HIDE_ITEM,
  SET_ACTIVE_LIST,
  HIDE_TAB
} from "../actions/actionTypes";

import { REHYDRATE } from "redux-persist/es/constants";

const initialState = {
  loading: false,
  activeList: 0,
  lists: []
};

export const news = (state = initialState, action) => {
  let newLists = state.lists.slice(0);
  switch (action.type) {
    case NEWS_LOADED:
      return { ...state, loading: action.loading };

    case NEWS_FETCHED:
      return {
        ...state,
        keyword: action.keyword,
        loading: false
      };

    case NEWS_LIST_ADDED:
      return {
        ...state,
        activeList: newLists.length,
        lists: newLists.concat({
          keyword: action.keyword,
          results: action.results
        })
      };
    case HIDE_ITEM:
      newLists[state.activeList].results[action.index].hidden = true;
      return { ...state, lists: newLists };
    case SET_ACTIVE_LIST:
      return { ...state, activeList: action.index };
    case HIDE_TAB:
      const lists = state.lists.slice(0);
      lists.splice(action.index, 1);
      return { ...state, lists: lists, activeList: 0 };
    case REHYDRATE:
      return state;
    default:
      return state;
  }
};

export default news;
