// src/App.js

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counter";
import Router from "./shared/Router";
import Todolist from "./test-todo/Todolist";

const App = () => {
  return <Todolist />;
};

export default App;
