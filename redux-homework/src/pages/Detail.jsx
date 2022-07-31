import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTodoId } from "../redux/modules/todo";

const Detail = () => {
  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTodoId(id));
  }, [dispatch, id]);

  return (
    <Details>
      <div>
        <div>
          <div>ID:{todo.id}</div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </button>
        </div>
        <h1>{todo.title}</h1>
        <div>{todo.body}</div>
      </div>
    </Details>
  );
};
const Details = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 600px;
    height: 400px;
    border: 2px solid black;
    & > h1 {
      padding: 0 24px;
    }
    & > div {
      display: flex;
      height: 80px;
      padding: 0 24px;
      justify-content: space-between;
      align-items: center;
      & > button {
        width: 120px;
        height: 40px;
        border-radius: 12px;
        cursor: pointer;
        border: none;
      }
    }
  }
`;
export default Detail;
