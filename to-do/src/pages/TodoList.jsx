import React, { useState } from "react";
import Layout from "../layout/Layout";
import Header from "../header/Header"; //헤더부분
import Form from "../form/Form";
import List from "../list/List";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다",
      isDone: true,
    },
  ]);
  return (
    <Layout>
      <Header />
      <Form setTodos={setTodos} todos={todos}></Form>
      <List setTodos={setTodos} todos={todos}></List>
    </Layout>
  );
};

export default TodoList;
