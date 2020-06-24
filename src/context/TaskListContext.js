import React, { createContext, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Do todo 1" },
    { id: 2, title: "Do todo 2" },
    { id: 3, title: "Do todo 3" },
    { id: 4, title: "Do todo 4" },
    { id: 5, title: "Do todo 5" },
    { id: 6, title: "Do todo 6" },
    { id: 7, title: "Do todo 7" },
    { id: 8, title: "Do todo 8" },
    { id: 9, title: "Do todo 9" },
    { id: 10, title: "Do todo 10" }
  ]);

  return (
    <TodoListContext.Provider value={{ todos }}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
