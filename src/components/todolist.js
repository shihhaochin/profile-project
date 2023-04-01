import React, { useState } from "react";

const todolist = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [todos, setTodos] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [input, setInput] = useState("");

  const handleTodoChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const submitTodo = () => {
    setTodos(input);
    setInput("");
  };

  return (
    <div className="todobg">
      <form className="todoForm">
        <input type="text" onChange={handleTodoChange} placeholder="今日任務" />
        <button type="button" onClick={submitTodo}>
          紀錄
        </button>
      </form>
      {todos && <p>{todos}</p>}
    </div>
  );
};

export default todolist;
