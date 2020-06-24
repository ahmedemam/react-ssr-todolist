import React from 'react';

const Todo = ({todo}) => {
    return (
        <li className="todo">
            <span>{todo.title}</span>
            <button className="btn btn-delete">
                <i className="fa fa-trash-alt"></i>
            </button>
            <button className="btn btn-edit">
            <i className="fa fa-pen"></i>
        </button>
        </li>
    );
}


export default Todo;