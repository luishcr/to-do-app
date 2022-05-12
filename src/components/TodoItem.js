import styles from "./Components.module.css";

function TodoItem(props) {
  return (
    <li className={styles.TodoItem}>
      <span>
        <i className="fa-solid fa-check"></i>
      </span>
      <p>{props.text}</p>
      <span>
        <i className="fa-solid fa-xmark"></i>
      </span>
    </li>
  );
}

export { TodoItem };
