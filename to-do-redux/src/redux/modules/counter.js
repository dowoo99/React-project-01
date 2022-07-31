// src/redux/modules/counter.js

// Action Value
const ADD_NUMBER = "ADD_NUMBER";

const MINUS_NUMBER = "MINUS_NUMBER";

// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,
  };
};

export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload,
  };
};

// Initial State

// Reducer

// export default reducer
// src/redux/modules/counter.js

// .. 중략

// Initial State
const initialState = {
  number: 0,
};

// 리듀서

const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        // state.number (기존의 nubmer)에 action.paylaod(유저가 더하길 원하는 값)을 더한다.
        number: state.number + action.payload,
      };
    case MINUS_NUMBER:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

// export default reducer
export default counter;
