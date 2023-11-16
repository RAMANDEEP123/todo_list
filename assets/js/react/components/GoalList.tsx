import { GoalItem } from "./GoalItem";
import React from "react";
import { useState, useEffect } from "react";
import { TaskItem } from "./TaskItem";

export  function GoalList({goals, setGoals}) {
    useEffect(() => {
      const getGoalsList = async () => {
        const response = await fetch(
          "http://localhost:4000/api/goals", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          }
        )
        // .then((response) => response.json())
        // .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
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