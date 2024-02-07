// TaskList.js
import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {/* Map through the tasks array and render a Task component for each task */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
