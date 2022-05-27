import styles from "./Components.module.css";

function TodoCounter({ total, completed }) {
  return (
    <div className={styles.TodoCounter}>
      <h2>
        {completed} of {total} tasks completed ✊{" "}
      </h2>
    </div>
  );
}

export { TodoCounter };
