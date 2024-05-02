import React from "react";

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

export default CategoryFilter;