import React from "react";
import "./common.css";

interface TaskItemInteface {
  id: number;
  goal_id: string;
  description: string;
  completed: boolean;
  completeItem: (id: number) => void;
}

export function TaskItem({
  id,
  description,
  completed,
  completeItem,
}: TaskItemInteface) {
  const handleComplete = async (id) => {
    completeItem(id);
  };

  return (
      <tbody>
        <tr>
          <td>
            <p>
              <span className={completed ? "line-through" : ""}>
                {description}
              </span>
            </p>
          </td>
          <td className="task-actions">
            <button onClick={() => handleComplete(id)} className="button">
              Complete
            </button>
            {/* Add more buttons or actions as needed */}
          </td>
        </tr>
      </tbody>
  );
}
