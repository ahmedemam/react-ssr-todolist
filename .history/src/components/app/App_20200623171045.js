import React from "react";

import "./App.css";
import TodoList from "../todolist/TodoList";
import TodoListContextProvider from "../../context/TaskListContext";

function App() {
  return (
    <TodoListContextProvider>
      <div className="App">
        <TodoList />
      </div>
    </TodoListContextProvider>
  );
}

export default App;
