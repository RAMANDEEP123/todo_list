// GoalList.jsx

import React, { useState, useEffect } from "react";
import { GoalItem } from "./GoalItem";
import { TaskItem } from "./TaskItem";
import "./GoalList.css"; // Import your updated CSS file
import './common.css';

export  function GoalList({goals, setGoals}) {
    useEffect(() => {
      const getGoalsList = async () => {
        const response = await fetch(
          "http://54.172.232.89:4000/api/goals", {
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
        console.log(goals?.data?.length);
        setGoals(responseJson);
      };
      getGoalsList();
    }, []);

    return (
      <div className="goal-list-container">
        {goals && goals.length > 0 ? (
          goals.map((goal) => {
            return <GoalItem key={goal.id} {...goal} />;
          })
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    );
}
