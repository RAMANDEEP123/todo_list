import { GoalItem } from "./GoalItem";
import React from "react";
import { useState, useEffect } from "react";
import { TaskItem } from "./TaskItem";

export  function GoalList({goals, setGoals}) {
    useEffect(() => {
      const getGoalsList = async () => {
        const response = await fetch(
          "http://localhost:4000/api/goals"
        );
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