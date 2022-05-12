import styles from "./Components.module.css";

function TodoList(props) {
  return (
    <section>
      <ul className={styles.TodoList}>{props.children}</ul>
    </section>
  );
}

export { TodoList };
