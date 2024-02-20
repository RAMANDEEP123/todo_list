import React from "react";
import "./common.css";

interface TaskItemInteface {
  id: number;
  user_id: string;
  description: string;
}

export function TaskItem({
  id,
  description,
}: TaskItemInteface) {

  return (
      <tbody>
        <tr>
          <td>
            <p>
                {description}
            </p>
          </td>
        </tr>
      </tbody>
  );
}
