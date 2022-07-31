import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports"; //추가된todo가져오기,삭제시키는거보내기,취소완료업데이트
import { deleteTodo, toggleTodo } from "../redux/modules/todo";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const onDeletTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const onToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };
  return (
    <ListBig>
      <h2>Working...🔥</h2>
      <div>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <div key={todo.id}>
                <Link to={`/${todo.id}`} key={todo.id}>
                  상세보기
                </Link>
                <div>
                  <h2>{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      onDeletTodo(todo.id);
                    }}
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={() => {
                      onToggleTodo(todo.id);
                    }}
                  >
                    완료!
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
      <h2>Done..! 🎉</h2>
      <div>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <div key={todo.id}>
                <Link to={`/${todo.id}`}>상세보기</Link>
                <div>
                  <h2>{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      onDeletTodo(todo.id);
                    }}
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={() => {
                      onToggleTodo(todo.id);
                    }}
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </ListBig>
  );
};
const ListBig = styled.div`
  padding: 0 24px;
  & > div {
    display: flex;
    gap: 12px;
    & > div {
      width: 270px;
      min-height: 150px;
      border: 4px solid teal;
      padding: 12px 12px 24px;
      border-radius: 12px;
      & > div {
        gap: 12px;
        & > button {
          width: 80px;
          margin-top: 10px;
          margin-right: 20px;
          height: 40px;
          border-radius: 20px;
          border: 2px solid red;
          cursor: pointer;
        }
      }
    }
  }
`;

export default List;
