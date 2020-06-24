import React from 'react';

const Todo = () => {
    return (
        <li className="todo">
            <span>Todo Title</span>
            <button className="btn btn-delete">
                <i className="fa fa-trash-alt"></i>
            </button>
            <button className="btn btn-edit">
            <i className="fa fa-trash-alt"></i>
        </button>
        </li>
    );
}


export default Todo;