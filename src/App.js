import "./styles.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { useState } from "react";
import { InventoryContext } from "./data/inventoryContext";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);

  function addTask(task) {
    setTasks([...tasks, task]);
    setEditing(null);
  }

  function updateTask(task) {
    setTasks(
      tasks.map(function (p) {
        if (p.id === task.id) {
          return task;
        } else {
          return p;
        }
      })
    );
    setEditing(null);
  }

  function deleteTask(id) {
    setTasks(
      tasks.filter(function (p) {
        return p.id !== id;
      })
    );
  }

  return (
    <div className="App">
      <InventoryContext.Provider
        value={{
          tasks,
          addTask,
          deleteTask,
          updateTask,
          setEditing,
          editing
        }}
      >
        <h1>Task Management Site</h1>
        {!editing ? (
          <>
            <Todos />
            <button className="" onClick={() => setEditing("new")}>
              Add Product
            </button>
          </>
        ) : (
          <TodoForm />
        )}
      </InventoryContext.Provider>
    </div>
  );
}
