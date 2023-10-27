import { useContext, useState } from "react";
import { InventoryContext } from "../data/inventoryContext";
import Todo from "./Todo";
import "../styles.css";
export default function Todos() {
  const { tasks } = useContext(InventoryContext);

  return (
    <div>
      {tasks.map((t) => (
        <Todo task={t} />
      ))}
    </div>
  );
}
