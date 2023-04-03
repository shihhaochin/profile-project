import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    //onSubmit 代表在提交表單時發生
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="今日任務"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        增加任務
      </button>
    </form>
  );
};
