import { useState } from "react";

let todoID = 1;

function App() {
  const TODO = "todo";
  const DONE = "done";

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, { id: todoID, todo, status: TODO }]);
    todoID++;
    setTodo("");
  }

  function toggleStatus(id) {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === id ? { ...t, status: t.status === DONE ? TODO : DONE } : t,
      ),
    );
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
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
              <li key={t.id} className={t.status === DONE ? "completed" : ""}>
                <span>
                  <input
                    type="checkbox"
                    checked={t.status === DONE}
                    onChange={() => toggleStatus(t.id)}
                  />
                </span>
                <span>{t.todo}</span>
                <span onClick={() => deleteTodo(t.id)}>x</span>
              </li>
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
