import { useContext } from "react";
import { InventoryContext } from "../data/inventoryContext";
import "../styles.css";
export default function Todo({ task }) {
  const { deleteTask, setEditing, updateTask } = useContext(InventoryContext);

  function toggleDo() {
    updateTask({
      ...task,
      do: !task.do
    });
  }
  return (
    <div>
      <li className="task">
        <div>
          <p>
            <span>
              <input type="checkbox" onChange={toggleDo} value={task.value} />
              {task.do ? <del>{task.task}</del> : task.task}
            </span>
          </p>
        </div>
        <div>
          <button className="edit-btn" onClick={() => setEditing(task.id)}>
            Edit
          </button>
          <button className="remove-btn" onClick={() => deleteTask(task.id)}>
            Remove
          </button>
        </div>
      </li>
    </div>
  );
}
