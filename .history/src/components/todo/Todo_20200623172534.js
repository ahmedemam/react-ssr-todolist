import React from "react";

const Todo = ({ todo }) => {
  return (
    <li className="todo">
      <span>{todo.title}</span>
      <button className="btn btn-delete">Delete</button>
      <button className="btn btn-edit">Edit</button>
    </li>
  );
};

export default Todo;
