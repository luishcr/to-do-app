import styles from "./Components.module.css";

function CreateTodoButton() {
  return (
    <div className={styles.CreateTodoBtn}>
      <button>
        <i className="fa-solid fa-circle-plus"></i>
      </button>
    </div>
  );
}

export { CreateTodoButton };
