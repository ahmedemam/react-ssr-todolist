import React, { createContext, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodoListContext.Provider value={{ todos }}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
