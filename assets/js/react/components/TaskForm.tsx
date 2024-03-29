import React from "react";
import { useState } from "react";
import './common.css';
export function TaskForm({setTasks, userId}) {
    const [input, setInput] = useState(typeof string);

    const addItem = async (description: string) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({task: {description: description, user_id: userId.toString()}})
        };

        const responseCreate = await fetch(
            `http://localhost:4000/api/tasks`,
            requestOptions
        );

        const response = await fetch(`http://localhost:4000/api/user/tasks/${userId.toString()}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseJson = await response.json();
            console.log(responseJson);
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