import { GoalItem } from "./GoalItem";
import React from "react";
import { useState, useEffect } from "react";
import { TaskItem } from "./TaskItem";

export  function GoalList({goals, setGoals}) {
    useEffect(() => {
      const getGoalsList = async () => {
        const response = await fetch(
          "http://54.198.43.247:4000/api/goals", {
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
      <div>
        {goals && goals.length > 0
          ? goals.map(goal => {
              return <GoalItem key={goal.id} {...goal} />
            })
          : "Loading..."}
      </div>
    );
}