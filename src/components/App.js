import React, { useState } from "react";

const initialTasks = [
  { id: 1, text: "Buy rice", category: "Groceries" },
  { id: 2, text: "Build a todo app", category: "Development" },
  { id: 3, text: "Walk the dog", category: "Personal" },
  //... add more tasks here
];

function CategoryFilter({ categories, onFilterTasks, selectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory? "selected" : ""}
          onClick={() => onFilterTasks(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <div className="text">{task.text}</div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All",...new Set(initialTasks.map((task) => task.category))];

  const onFilterTasks = (category) => {
    if (category === "All") {
      setTasks(initialTasks);
    } else {
      setTasks(initialTasks.filter((task) => task.category === category));
    }
  };

  return (
    <div>
      <CategoryFilter categories={categories} onFilterTasks={onFilterTasks} selectedCategory={selectedCategory} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;