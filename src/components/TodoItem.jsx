import React from "react";

// import {items} from "./App";

function TodoItem({ data, onCheck, id, status, toggleStyle }) {
  return (
    <li>
      <span
        // style={{ textDecoration: status ? "line-through" : "none" }}
        onClick={() => {
          toggleStyle(id);
        }}
      >
        <span
          style={{
            marginLeft: "26px",
            marginRight: "10px",
            padding: 0
          }}
        >
          {status && (
            <span
              style={{
                position: "absolute",
                top: "9px",
                left: "13px",
                color: " rgba(0, 206, 0, 0.541)"
              }}
              className="material-icons"
            >
              task_alt
            </span>
          )}
        </span>
        {data}
      </span>
      <button
        className="btn"
        onClick={() => {
          onCheck(id);
        }}
      >
        x
      </button>
    </li>
  );
}

export default TodoItem;
