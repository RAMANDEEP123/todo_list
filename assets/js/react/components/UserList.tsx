import React, { useState, useEffect } from "react";
import { UserItem } from "./UserItem";
import "./UserList.css"; 
import './common.css';

export  function UserList({ users, setUsers }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUsersList = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    mode: 'no-cors'
                });
                if (!response.ok) {
                    console.log(`HTTP error! Status: ${response.status}`);
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const responseJson = await response.json();
                console.log("user list initial users list");
                console.log(responseJson);
                setUsers(responseJson);
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false); 
            }
        };
        getUsersList();
    }, []);

    return (
        <div className="user-list-container">
            {loading ? (
                <p className="loading">Loading...</p>
            ) : users && users.length > 0 ? (
                users.map((user) => <UserItem key={user.id} {...user} />)
            ) : (
                <p className="loading">No users found.</p>
            )}
        </div>
    );
}