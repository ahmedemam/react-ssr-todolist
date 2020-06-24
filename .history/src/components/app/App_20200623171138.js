import React from "react";

import "./App.css";
import TodoList from "../todolist/TodoList";
import TodoListContextProvider from "../../context/TaskListContext";

function App() {
  return (
    <TodoListContextProvider>
      <div className="container">
        <TodoList />
      </div>
    </TodoListContextProvider>
  );
}

export default App;
