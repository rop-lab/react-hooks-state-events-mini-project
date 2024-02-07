import React from "react";

function Task({ task, onDelete }) { // Accept task and onDelete as props
  const { text, category } = task; // Destructure text and category from the task object

  const handleDelete = () => {
    onDelete(task); // Call onDelete with the task object when the delete button is clicked
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button> {/* Call handleDelete onClick */}
    </div>
  );
}

export default Task;
