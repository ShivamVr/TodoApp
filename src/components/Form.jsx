import React from "react";

function Form({ handleChange, type, btn, value, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="form">
      <div>
        <input onChange={handleChange} type={type} value={value} />
        <button className="btn-add" type="submit">
          <span>{btn}</span>
        </button>
      </div>
    </form>
  );
}

export default Form;
