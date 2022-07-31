const ADD_TODO = "ADD_TODO"; //액션 타입지정
export const addTodo = (paylaod) => {
  //액션함수생성
  return {
    type: ADD_TODO,
    paylaod,
  };
};
const initialState = {
  todos: [
    {
      id: 1,
      title: "react를 배워봅시다",
    },
  ],
}; //초기값

//리듀서 만들기
const todo_list = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.paylaod],
      };
    default:
      return state;
  }
};

// export default reducer
export default todo_list;
