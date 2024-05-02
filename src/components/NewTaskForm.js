import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText ||!taskCategory) return;
    onTaskFormSubmit({ text: taskText, category: taskCategory });
    setTaskText("");
    setTaskCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <select
        value={taskCategory}
        onChange={(e) => setTaskCategory(e.target.value)}
      >
        <option value="">Select a category...</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default NewTaskForm;