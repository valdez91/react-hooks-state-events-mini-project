import React from "react";
import Task from "./Task";
function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={{...task, category: task.category || "General" }}
        />
      ))}
    </div>
  );
}

export default TaskList;