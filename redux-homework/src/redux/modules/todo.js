const ADD_TODO = "ADD_TODO"; //추가하는 액션타입
const GET_TO_ID = "GET_TO_ID"; //detail.js에 ID값가져오는액션타입
const DELETE_TODO = "DELETE_TODO"; //삭제하는 액션타입
const TOGGLE_TODO = "TOGGLE_TODO"; //취소,완료 액션타입

const initialState = {
  todos: [
    {
      id: "1",
      title: "리액트 ",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};
// Action creater
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const getTodoId = (payload) => {
  return {
    type: GET_TO_ID,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    case GET_TO_ID:
      console.log(action);
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todo;
