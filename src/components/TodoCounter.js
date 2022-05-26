import styles from "./Components.module.css";

function TodoCounter() {
  return (
    <div className={styles.TodoCounter}>
      <h2>X of Y tasks completed ✊ </h2>
    </div>
  );
}

export { TodoCounter };
