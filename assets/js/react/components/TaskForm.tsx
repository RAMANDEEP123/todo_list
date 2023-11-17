import React from "react";
import { useState } from "react";

export function TaskForm({setTasks, goalId}) {
    const [input, setInput] = useState(typeof string);
    
    console.log('Goal id primted');
    console.log(goalId);

    const addItem = async (description: string) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({task: {description: description, completed: false, goal_id: goalId.toString()}})
        };

        const responseCreate = await fetch(
            `http://localhost:4000/api/tasks`,
            requestOptions
        );

        const response = await fetch(
            "http://localhost:4000/api/tasks"
            );
        const responseJson = await response.json();

        setTasks(responseJson);
    }
    
    return (
    <>
        <div className="task-form-container">
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="e.g. Make a healthy dinner" />
            <button onClick={() => addItem(input)} className="button">
                Add new Task
            </button>
        </div>
        <hr className="my-13" />
    </>
    );
}