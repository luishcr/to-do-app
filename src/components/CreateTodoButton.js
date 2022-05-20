import styles from "./Components.module.css";

function CreateTodoButton() {
  return (
    <div className={styles.CreateTodoBtn}>
      <button>
        <i class="fa-solid fa-circle-plus"></i>
      </button>
    </div>
  );
}

export { CreateTodoButton };
