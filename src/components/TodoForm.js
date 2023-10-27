import { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { InventoryContext } from "../data/inventoryContext";
import "../styles.css";
export default function TodoForm() {
  const { tasks, addTask, setEditing, updateTask, editing } = useContext(
    InventoryContext
  );

  let initialData = {
    task: "",
    do: false
  };

  if (editing !== "new") {
    initialData = tasks.find(function (p) {
      return p.id === editing;
    });
  }
  const [task, setTask] = useState(initialData);

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      task: task.task,
      id: nanoid(),
      do: false
    };
    if (editing === "new") {
      addTask(newTask);
    } else {
      updateTask(task);
    }
  }

  function handleTask(e, field) {
    setTask({ ...task, [field]: e.target.value });
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => handleTask(e, "task")}
          value={task.task}
          placeholder="Add new task..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
