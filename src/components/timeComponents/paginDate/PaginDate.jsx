import React from "react";
import styles from "./paginDate.module.css";

export const PaginDate = () => {
  return (
    <div>

      <div>
        <button>left</button>
        <button>right</button>
        <span>date</span>
      </div>

      <div>
        <div>calander</div>
        <div>
          <button>Day</button>
          <button>Week</button>
        </div>
      </div>
      
    </div>
  );
};
