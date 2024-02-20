import React from "react";
import { useState } from "react";
import './common.css';
export function UserForm({setUsers}) {
    const [inputTitle, setInputTitle] = useState('');

    const addUser = async (title: string) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({user: {title: title}})
        };

        const responseCreate = await fetch(
            `http://localhost:4000/api/users/create`,
            requestOptions
        );

        const response = await fetch(
            "http://localhost:4000/api/users"
            );
        const responseJson = await response.json();

        setUsers(responseJson);
    }
    
    return (
    <>
        <div className="task-form-container">
            <input value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} type="text" placeholder="User Name" />
            <button onClick={() => addUser(inputTitle)} className="button">
                Add new User
            </button>
        </div>
        <hr className="my-12" />
    </>
    );
}