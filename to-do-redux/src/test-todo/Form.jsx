import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
const Form = () => {
  const todos = useSelector((state) => state.todos.todos);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const clickTodo = (e) => {
    e.preventDefault();
    if (title === "") return;
    dispatch(addTodo({ id: todos.length + 1, title }));
  };
  return (
    <Header onSubmit={clickTodo}>
      <label>Todo의 제목을 입력하세요</label>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value); // value 값이 바뀔떄마다 title에저장함 state를
        }}
        type="text"
      ></input>
      <button>추가하기</button>
    </Header>
  );
};
const Header = styled.form`
  display: flex;
  gap: 24px;
  padding: 30px;
  & > button {
    border: none;
    width: 120px;
    height: 25px;
    border-radius: 12px;
    cursor: pointer;
  }
  & > input {
    border: 1px solid #eee;
    margin: 0 24px;
    width: 300px;
    outline: none;
    padding: 0 10px;
    border-radius: 12px;
    height: 30px;
  }
`;
export default Form;
