import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import data from './data/data.json';

// Initial state
const startState = {
  cards: [],
};

// Actions

// Action Creator
export const initialCards = () => {
  // Action
  return {
    type: 'INITIALCARDS',
    cards: data,
  };
};

export const addItem = (item) => {
  return {
    type: 'ADD',
    item,
  };
};

// Reducers
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALCARDS':
      return {
        cards: action.cards,
      };
    case 'ADD':
      return {
        ...state,
        cards: [...state, action.item],
      };
    default:
      return state;
  }
};

// Create store
export const initStore = (initialState = startState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
