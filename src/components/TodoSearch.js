import styles from "./Components.module.css";

function TodoSearch() {
  return (
    <div className={styles.TodoSearch}>
      <input placeholder="Escribe una tarea" />
    </div>
  );
}

export { TodoSearch };
