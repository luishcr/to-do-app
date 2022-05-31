import { useState } from "react";
import styles from "./Components.module.css";

function TodoForm({ openModal, setOpenModal, addTodo }) {
  const [newTodoValue, setNewTodoValue] = useState("");

  return (
    <form
      className={styles.Form}
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
      }}
    >
      <label>Write a new task:</label>

      <textarea
        value={newTodoValue}
        onChange={(event) => {
          setNewTodoValue(event.target.value);
        }}
        placeholder="Create a Nextjs App"
        required
      ></textarea>

      <div className={styles.Form__buttons}>
        <button
          onClick={() => {
            setOpenModal(!openModal);
          }}
        >
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export { TodoForm };
