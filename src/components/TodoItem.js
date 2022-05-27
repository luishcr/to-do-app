import styles from "./Components.module.css";

function TodoItem(props) {
  const checkTask = () => {
    console.log("Completed task: " + props.text);
  };
  const deleteTask = () => {
    console.log("Deleted task: " + props.text);
  };

  return (
    <li className={`${styles.TodoItem} ${props.completed && "completed"}`}>
      <span onClick={checkTask}>
        <i className="fa-solid fa-check" />
      </span>
      <p>{props.text}</p>
      <span onClick={deleteTask}>
        <i className="fa-solid fa-xmark" />
      </span>
    </li>
  );
}

export { TodoItem };
