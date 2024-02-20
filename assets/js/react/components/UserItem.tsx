import React, { useState } from "react";
import { TaskList } from "./TaskList";
import { TaskForm } from "./TaskForm";

interface UserItemInteface {
  id: number;
  title: string;
}

export function UserItem({ id, title }: UserItemInteface) {
  const [tasks, setTasks] = useState({});
  const [showAddTasks, setShowAddTasks] = useState(false);

  const showAddTasksView = () => setShowAddTasks(true);

  const rendeshowAddTasksView = () => {
    if (showAddTasks) {
      return (
        <div>
          <TaskForm setTasks={setTasks} userId={id} />
        </div>
      );
    }
  };

  return (
    <div className="user-item">
      <div className="userTitle">Name: {title}</div>
      <div style={buttonContainerStyle}>
        <div>
          <button style={button1Style} onClick={showAddTasksView}>
            Add Task
          </button>
        </div>
      </div>
      <div className="tasks">
        <TaskList tasks={tasks} setTasks={setTasks} userId={id} />
      </div>
      {rendeshowAddTasksView()}
    </div>
  );
}

const buttonContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const button1Style = {
  marginTop: "10px",
  marginRight: "10px", // Add some margin to the right of the button
};