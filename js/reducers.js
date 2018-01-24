import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

const DEFAULT_STATE = {
  searchTerm: '',
  apiData: {}
};

const searchTerm = (state = '', action) => {
  if (action.type == 'SET_SEARCH_TERM')
    return Object.assign({}, state, { searchTerm: action.payload });
  return state;
};

const apiData = (state = {}, action: Action) => {
  if (action.type == 'ADD_API_DATA')
    return Object.assign({}, state, { [action.payload.imdbID]: action.payload });
  return state;
};

const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
