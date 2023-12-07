import React from "react";
import { TaskList } from './TaskList';
import { TaskForm } from './TaskForm';
import { useState, useEffect } from "react";
import FileUpload from './FileUpload';
import './common.css';
interface GoalItemInteface {
    id: number;
    title: string;
    description: string;
  }
  
export function GoalItem({ id, title, description}: GoalItemInteface) {
    const [goals, setGoals] = useState({});
    const [tasks, setTasks] = useState({});
    const [goalId, setGoalId] = useState({});
    const [showAddTasks, setShowAddTasks] = useState(false);

    const showAddTasksView = () => async () => {
        setShowAddTasks(true);
    }

    const rendeshowAddTasksView = () => {
        if (showAddTasks) {
          return (<div>
            <TaskForm setTasks={setTasks} goalId={id}/>
            </div>
          )
        }
      }

    return (
        <div className="goal-item">
            <div className="goalTitle">Title: {title}</div>
            <div className="goalDesc">Description: {description}</div>
            <div className="button-container"><button  className="button1" onClick={showAddTasksView()}> 
                    Add Task
            </button><div>
              <FileUpload goalId={id}/>
            </div></div>
            <div className="tasks">
                <TaskList tasks={tasks} setTasks={setTasks} goalId={id}/>
            </div>
            {rendeshowAddTasksView()}
        </div>
    );
}