import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo("");
  }

  return (
    <div className="todo-wrapper">
      <form onSubmit={(e) => handleSubmit(e)} className="todo-form">
        <input
          type="text"
          placeholder="Enter todo here"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="todo-list">
        {todos.length > 0 ? (
          <ul>
            {todos.map((t) => (
              <li>{t}</li>
            ))}
          </ul>
        ) : (
          <span>No Todos Added</span>
        )}
      </div>
    </div>
  );
}

export default App;
