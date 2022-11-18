import { combineReducers } from "redux";

const initialState = { count: 1 };

function counterReducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  } else if (action.type === "RESET") {
    return initialState;
  } else if (action.type === "ASYNC_INCREMENT") {
    return { count: state.count + 10 };
  }

  return state;
}

const initialState2 = 0;

function counter2Reducer(state = initialState2, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "RESET") {
    return initialState2;
  }

  return state;
}

export default combineReducers({ counterReducer, counter2Reducer });
