import React from "react";
import { useState, useEffect } from "react";

interface TaskItemInteface {
    id: number;
    description: string;
    user_id: string;
    updateItem: (id: number, description: string) => void;
  }
  
export function TaskItem({ id, description, updateItem}: TaskItemInteface) {
    const [inputDescription, setInputDescription] = useState(description);
    const [updateClicked, setUpdateClicked] = useState(false);
    // const handleDelete = async (id) => {
    //     deleteItem(id)
    // }

    const handleUpdate = async (id) => {
        setUpdateClicked(false);
        updateItem(id, inputDescription)
    }

    const rendeUpdateTaskView  = async () => {
      setUpdateClicked(true);
    }

    return (
        <div className="task-item">
            <div className="user-list-container">
              {updateClicked ? (
                <span>
                  <input value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} type="text" />
                  <button onClick={() => handleUpdate(id)} className="button">
                      Save
                  </button>
                </span>
              ) : (
                <span>
                  <span>{description}</span>
                 <div className="task-actions">
                {/* <button onClick={() => handleUpdate(id)} className="button">
                    Update
                </button> */}
                 <button onClick={rendeUpdateTaskView} className="button">
                    Update
                </button>
                {/* <button onClick={() => handleDelete(id)} className="button">
                    Remove
                </button> */}
            </div>
                </span>
                
              )}
            </div>
        </div>
    );
}