import React, { useContext } from 'react';
import { TodoListContext } from '../../context/TaskListContext';
import Todo from '../todo/Todo';

const TodoList = () => {
    const {todos} = useContext(TodoListContext);
    return (
        console.log(todos);
        <ul className="todolist">
            {todos.map(todo => {
                return <Todo />
            })}
        </ul>
    )
}


export default TodoList;