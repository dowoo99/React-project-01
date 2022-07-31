import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const List = () => {
  const { todos } = useSelector((state) => state.todos);
  return (
    <ListBox>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </ListBox>
  );
};

export default List;
const ListBox = styled.div`
  display: flex;
  & > div {
    width: 300px;
    height: px;
    border: 1px solid #888;
    padding: 20px;
    border-radius: 10px;
    margin-right: 20px;
  }
`;
