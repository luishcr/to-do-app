import styles from "./Components.module.css";

function TodoSearch() {
  return (
    <div className={styles.TodoSearch}>
      <input placeholder="Add task.." />
    </div>
  );
}

export { TodoSearch };
