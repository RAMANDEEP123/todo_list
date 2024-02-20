import React, { useState, useEffect } from "react";
import { UserItem } from "./UserItem";
import "./UserList.css"; // Import your updated CSS file
import './common.css';

export  function UserList({users, setUsers}) {
    useEffect(() => {
      const getUsersList = async () => {
        const response = await fetch(
          "http://localhost:4000/api/users", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
            mode: 'no-cors'
          }
        );
        if (!response.ok) {
          console.log(`HTTP error! Status: ${response.status}`);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseJson = await response.json();
        console.log(responseJson);
        console.log(users?.data?.length);
        setUsers(responseJson);
      };
      getUsersList();
    }, []);

    return (
      <div className="user-list-container">
        {users && users.length > 0 ? (
          users.map((user) => {
            return <UserItem key={user.id} {...user} />;
          })
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    );
}
