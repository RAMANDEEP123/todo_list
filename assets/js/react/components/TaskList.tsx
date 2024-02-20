import { TaskItem } from "./TaskItem";
import React from "react";
import { useState, useEffect } from "react";
import './common.css';
export  function TaskList({tasks, setTasks, userId}) {

    useEffect(() => {
      const getTaskList = async () => {
        const response = await fetch(
          `http://localhost:4000/api/user/tasks/${userId.toString()}`
        );
        const responseJson = await response.json();
        console.log(responseJson);
        setTasks(responseJson);
      };
      getTaskList();
    }, []);
    return (
    <>
    <table className="task-item">
        {tasks?.length > 0 ? (
            tasks.map((task) => <TaskItem key={task.id} {...task} />)
        ) : (
        <div className="task-list-container">
            <h3>Tasks are loading ...</h3>
        </div>
        )}
    </table>
    </>
    );
}