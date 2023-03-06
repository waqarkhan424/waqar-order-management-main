import React from "react";

const Categories = ({ onChange }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => onChange("all")}>
        all
      </button>
      <button className="filter-btn" onClick={() => onChange("breakfast")}>
        breakfast
      </button>
      <button className="filter-btn" onClick={() => onChange("lunch")}>
        lunch
      </button>
      <button className="filter-btn" onClick={() => onChange("dinner")}>
        dinner
      </button>
    </div>
  );
};

export default Categories;
