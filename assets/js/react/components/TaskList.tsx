import { TaskItem } from "./TaskItem";
import React, { useState, useEffect } from "react";
import './common.css';

export function TaskList({ tasks, setTasks, userId }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTaskList = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/user/tasks/${userId.toString()}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const responseJson = await response.json();
                console.log(responseJson);
                setTasks(responseJson);
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching tasks:', error);
                setLoading(false); 
            }
        };
        getTaskList();
    }, []);

    const updateItem = async (id: number, description: string) => {
        try {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: id, task: { id: id, description: description } })
            };

            const responseUpdate = await fetch(`http://localhost:4000/api/tasks/update`, requestOptions);
            if (!responseUpdate.ok) {
                throw new Error(`HTTP error! Status: ${responseUpdate.status}`);
            }

            const response = await fetch(`http://localhost:4000/api/user/tasks/${userId.toString()}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseJson = await response.json();
            console.log(responseJson);
            setTasks(responseJson);
            setLoading(false); 
        } catch (error) {
            console.error('Error updating task:', error);
        }
    }

    const deleteItem = async (id: number) => {
        try {
            const requestOptions = {
                method: 'DELETE',
            };

            const responseDelete = await fetch(`http://localhost:4000/api/tasks/delete/${id}`, requestOptions);
            if (!responseDelete.ok) {
                throw new Error(`HTTP error! Status: ${responseDelete.status}`);
            }

            const response = await fetch(`http://localhost:4000/api/user/tasks/${userId.toString()}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseJson = await response.json();
            console.log(responseJson);
            setTasks(responseJson);
            setLoading(false); 
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }

    return (
        <>
            {loading ? (
                <div className="task-list-container">
                    <h3>Tasks are loading ...</h3>
                </div>
            ) : tasks?.length > 0 ? (
                <table className="task-item">
                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            updateItem={updateItem}
                            deleteItem={deleteItem}
                            {...task}
                        />
                    ))}
                </table>
            ) : (
                <div className="task-list-container">
                    <h3>No tasks found.</h3>
                </div>
            )}
        </>
    );
}
