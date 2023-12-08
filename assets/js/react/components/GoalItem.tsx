import React, { useState } from "react";
import { TaskList } from "./TaskList";
import { TaskForm } from "./TaskForm";
import FileUpload from "./FileUpload";

interface GoalItemInteface {
  id: number;
  title: string;
  description: string;
}

export function GoalItem({ id, title, description }: GoalItemInteface) {
  const [tasks, setTasks] = useState({});
  const [showAddTasks, setShowAddTasks] = useState(false);

  const showAddTasksView = () => setShowAddTasks(true);

  const rendeshowAddTasksView = () => {
    if (showAddTasks) {
      return (
        <div>
          <TaskForm setTasks={setTasks} goalId={id} />
        </div>
      );
    }
  };

  return (
    <div className="goal-item">
      <div className="goalTitle">Title: {title}</div>
      <div className="goalDesc">Description: {description}</div>
      <div style={buttonContainerStyle}>
        <div>
          <button style={button1Style} onClick={showAddTasksView}>
            Add Task
          </button>
        </div>
        <div style={fileUploadStyle}>
          <FileUpload goalId={id} />
        </div>
      </div>
      <div className="tasks">
        <TaskList tasks={tasks} setTasks={setTasks} goalId={id} />
      </div>
      {rendeshowAddTasksView()}
    </div>
  );
}

// CSS styles directly in the same file
const buttonContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const button1Style = {
  // padding: "10px",
  // backgroundColor: "#4CAF50",
  // color: "white",
  // border: "none",
  // borderRadius: "4px",
  // cursor: "pointer",
  marginTop: "10px",
  marginRight: "10px", // Add some margin to the right of the button
};

// Optional: Add styles for FileUpload component
// Adjust styles based on your design preferences
const fileUploadStyle = {
  // Add any additional styles you need
};
