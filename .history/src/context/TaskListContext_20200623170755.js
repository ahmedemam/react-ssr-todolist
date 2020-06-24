import { createContext, useState } from "react";

export const TodoListContext = createContext();


const TodoListContextProvider = () => {
    const [todos, setTodos] = useState([
        {id: 1, todo: 'Do todo 1'},
        {id: 1, todo: 'Do todo 2'},
        {id: 1, todo: 'Do todo 3'},
        {id: 1, todo: 'Do todo 4'},
        {id: 1, todo: 'Do todo 5'},
        {id: 1, todo: 'Do todo 6'},
        {id: 1, todo: 'Do todo 7'},
        {id: 1, todo: 'Do todo 8'},
        {id: 1, todo: 'Do todo 9'},
        {id: 1, todo: 'Do todo 10'},
    ]);

    return (
        <TodoListContext.Provider />
    )
}

export default TodoListContextProvider;

