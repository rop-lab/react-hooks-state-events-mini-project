// App.js
import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const handleTaskFormSubmit = (formData) => {
    // Add new task to the list with the text and category from the form data
    console.log("New task submitted:", formData);
    // You need to implement the logic to add the new task to the list (TASKS)
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={TASKS} />
    </div>
  );
}

export default App;
