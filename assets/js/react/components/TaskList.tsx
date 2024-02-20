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

    const updateItem = async (id: number, description: string) => {
      console.log(id);
      console.log(description);

      const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({id: id, task: { id: id, description: description}})
      };
      const responseUpdate = await fetch(
          `http://localhost:4000/api/tasks/update`,
          requestOptions
      );

      const response = await fetch(
          "http://localhost:4000/api/tasks"
        );
      const responseJson = await response.json();
      setTasks(responseJson);
    }

    return (
    <>
    <table className="task-item">
      {tasks?.length > 0 ? (
              tasks.map((task) => <TaskItem updateItem={updateItem} key={task.id} {...task} />)
          ) : (
          <div className="task-list-container">
              <h3>Tasks are loading ...</h3>
          </div>
        )}
    </table>
    </>
    );
}