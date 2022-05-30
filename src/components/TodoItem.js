import styles from "./Components.module.css";
import { IconContext } from "react-icons";
import { FaCheck, FaTimes } from "react-icons/fa";

function TodoItem(props) {
  return (
    <li className={`${styles.TodoItem} ${props.completed && "completed"}`}>
      <span onClick={props.checkTask}>
        <IconContext.Provider value={{ className: "Icon__check" }}>
          <FaCheck />
        </IconContext.Provider>
      </span>
      <p>{props.text}</p>
      <span onClick={props.deleteTask}>
        <IconContext.Provider value={{ className: "Icon__xmark" }}>
          <FaTimes />
        </IconContext.Provider>
      </span>
    </li>
  );
}

export { TodoItem };
