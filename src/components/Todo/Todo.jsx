import React, { useState } from "react";
import "./todo.css";

const colors = [
  "#ffadad",
  "#fa5252",
  "#ff4dc4",
  "#db4dff",
  "#780096",
  "#3a0096",
  "#3679ff",
  "#36ffff",
  "#36ffb5",
  "#00b573",
  "#a6b500",
  "#ff8945",
  "#ffd8c2",
];

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [color, setColor] = useState({
    idx: 0,
    value: "",
  });

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      text: text,
      isComplete: false,
      newColor: color.value,
    };

    if (!text.trim()) return;

    setTodos([...todos, newTodo]);
    setText("");
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const updateTodo = (id) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isComplete: !item.isComplete };
      }

      return item;
    });

    setTodos(newTodos);
  };

  return (
    <div className="todo">
      <form className="todo_form">
        <input
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="Введите название задачи"
        />
        <button onClick={addTodo}>Добавить</button>
      </form>

      <div className="list_colors">
        {colors.map((item, index) => (
          <div
            style={{ background: item }}
            className={`color ${index === color.idx && "active"}`}
            onClick={() =>
              setColor({
                value: item,
                idx: index,
              })
            }
          ></div>
        ))}
      </div>

      <ul className="todo_list">
        {todos.map((todo) => (
          <li style={{ background: todo.newColor }}>
            <span className={`${todo.isComplete && "isComplete"}`}>
              {todo.text}{" "}
            </span>
            <div>
              <button
                onClick={() => deleteTodo(todo.id)}
                disabled={!todo.isComplete}
                className="delete"
              >
                Удалить
              </button>
              <button onClick={() => updateTodo(todo.id)}>Завершить</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
