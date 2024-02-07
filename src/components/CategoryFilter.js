import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const handleClick = (category) => {
    onSelectCategory(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* Map through the categories array and render a button for each category */}
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
