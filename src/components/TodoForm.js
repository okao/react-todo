import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="test"
        placeholder="Add a Todo"
        value={input}
        ref={inputRef}
        onChange={handleChange}
        name="text"
        className="todo-input"
      />

      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
