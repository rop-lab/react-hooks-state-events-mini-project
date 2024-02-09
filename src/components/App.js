import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskFormSubmit = (formData) => {
    const newTask = {
      id: tasks.length + 1, // Generate a unique ID for the new task
      text: formData.text,
      category: formData.category
    };
    setTasks([...tasks, newTask]); // Add the new task to the tasks array
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
