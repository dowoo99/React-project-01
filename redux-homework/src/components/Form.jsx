import React, { useState } from "react";
import nextId from "react-id-generator";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todo";

const Form = () => {
  const id = nextId();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });
  const onChangeHander = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
  const onsubmitHander = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    dispatch(addTodo({ ...todo, id }));
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  };
  return (
    <Forms onSubmit={onsubmitHander}>
      <div>
        <label>제목</label>
        <input value={todo.title} onChange={onChangeHander} name="title" type="text"></input>
        <label>내용</label>
        <input value={todo.body} onChange={onChangeHander} name="body" type="text"></input>
      </div>
      <button>추가하기</button>
    </Forms>
  );
};
const Forms = styled.form`
  display: flex;
  margin: 12px;
  padding: 30px;
  justify-content: space-between;
  & > button {
    width: 140px;
    height: 40px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
  }
  & > div {
    display: flex;
    gap: 20px;
    align-items: center;
    & > input {
      width: 240px;
      height: 40px;
      border-radius: 12px;
      padding: 0 12px;
      border: none;
    }
  }
`;
export default Form;
