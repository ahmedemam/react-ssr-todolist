import React, { createContext, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Do todo 1" },
    { id: 2, todo: "Do todo 2" },
    { id: 3, todo: "Do todo 3" },
    { id: 4, todo: "Do todo 4" },
    { id: 5, todo: "Do todo 5" },
    { id: 6, todo: "Do todo 6" },
    { id: 7, todo: "Do todo 7" },
    { id: 8, todo: "Do todo 8" },
    { id: 9, todo: "Do todo 9" },
    { id: 10, todo: "Do todo 10" }
  ]);

  return (
    <TodoListContext.Provider value={{ todos }}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
