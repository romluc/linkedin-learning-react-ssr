import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import data from './data/data.json';

// Initial state
const startState = {
  card: [],
};

// Actions
export const initialCards = () => {
  return {};
};

export const initStore = (initialState = startState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
