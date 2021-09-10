import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Heading from "./Heading";
import Form from "./Form";
import { v4 as uuid } from "uuid";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function toggleStyle(id) {
    const newData = items.map((el) => {
      return el.id === id ? { ...el, status: !el.status } : el;
    });
    setItems(newData);
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function deleteItem(id) {
    const newData = items.filter((el) => {
      return el.id !== id;
    });
    setItems(newData);
  }

  function addItem(event) {
    if (inputText !== "") {
      setItems([...items, { title: inputText, status: false, id: uuid() }]);
      setInputText("");
    }
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <Heading text={"TO-DO List"} />
      </div>
      <Form
        handleChange={handleChange}
        type={"text"}
        value={inputText}
        onSubmit={addItem}
        btn={"Add"}
      />
      <div>
        <ul>
          {items.map((item) => {
            return (
              <TodoItem
                data={item.title}
                key={item.id}
                onCheck={deleteItem}
                toggleStyle={toggleStyle}
                id={item.id}
                status={item.status}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
