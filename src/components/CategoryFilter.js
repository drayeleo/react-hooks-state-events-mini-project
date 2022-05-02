import React from "react";

function CategoryFilter({ categories, onSetCategory, categoryState }) {


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category =>
        <button
          key={category}
          className={categoryState === category ? "selected" : ""}
          name={category}
          onClick={onSetCategory}
        >
          {category}
        </button>)}
    </div>
  );
}

export default CategoryFilter;
