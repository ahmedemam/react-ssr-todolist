import React, { useContext } from 'react';
import { TodoListContext } from '../../context/TaskListContext';

const TodoList = () => {
    const {todos} = useContext(TodoListContext);
    return (
        <div>
        </div>
    )
}


export default TodoList;