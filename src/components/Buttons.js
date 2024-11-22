import React from "react";

function Buttons({ onAddRandom, onSortByName, onSortByPopularity }) {
  return (
    <div>
      <button
        onClick={onAddRandom}
        style={{
          padding: "10px",
          fontSize: "16px",
          margin: "10px",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Add Random Contact
      </button>
      <button
        onClick={onSortByName}
        style={{
          padding: "10px",
          fontSize: "16px",
          margin: "10px",
          cursor: "pointer",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Sort by Name
      </button>
      <button
        onClick={onSortByPopularity}
        style={{
          padding: "10px",
          fontSize: "16px",
          margin: "10px",
          cursor: "pointer",
          backgroundColor: "#ffc107",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Sort by Popularity
      </button>
    </div>
  );
}

export default Buttons;
