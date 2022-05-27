import styles from "./Components.module.css";

function CreateTodoButton() {
  const addNewTask = () => {
    console.log("New Task Added");
  };

  return (
    <div className={styles.CreateTodoBtn}>
      <button onClick={addNewTask}>
        <i className="fa-solid fa-circle-plus"></i>
      </button>
    </div>
  );
}

export { CreateTodoButton };
