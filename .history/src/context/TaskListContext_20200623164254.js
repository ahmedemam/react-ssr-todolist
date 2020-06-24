import React, { createContext, useState } from "react";

export const TaskListContext = createContext();


const TaskListContextProvider = () => {
    const [tasks, setTasks] = useState([
        {id: 1, task: 'Do Task 1'},
        {id: 1, task: 'Do Task 2'},
        {id: 1, task: 'Do Task 3'},
        {id: 1, task: 'Do Task 4'},
        {id: 1, task: 'Do Task 5'},
        {id: 1, task: 'Do Task 6'},
        {id: 1, task: 'Do Task 7'},
        {id: 1, task: 'Do Task 8'},
        {id: 1, task: 'Do Task 9'},
        {id: 1, task: 'Do Task 10'},
    ]);
}