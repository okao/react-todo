import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ""
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      key={index}
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
    >
      <div onClick={() => completeTodo(todo.id)} key={todo.id}>
        {todo.text}
      </div>
      <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
      <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
    </div>
  ));
}

export default Todo;
