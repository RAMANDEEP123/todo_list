import React from "react";
import { useState } from "react";
import './common.css';
export function UserForm({setUsers}) {
    const [inputTitle, setInputTitle] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    const addUser = async (name: string, email: string) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({user: {name: name, email: email}})
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
            <input value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} type="text" placeholder="Enter user name..." />
            <input value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} type="text" placeholder="Enter email address..." />
            <button onClick={() => addUser(inputTitle, inputEmail)} className="button">
                Add new User
            </button>
        </div>
        <hr className="my-12" />
    </>
    );
}