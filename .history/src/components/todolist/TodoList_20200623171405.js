import React, { useContext } from 'react';
import { TodoListContext } from '../../context/TaskListContext';
import Todo from '../todo/Todo';

const TodoList = () => {
    const {todos} = useContext(TodoListContext);
    return (
        <ul className="todolist">
            {todos.map(todo => {
                return <Todo todo={todo}/>
            })}
        </ul>
    )
}


export default TodoList;