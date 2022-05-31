import styles from "./Components.module.css";
import { IconContext } from "react-icons";
import { FaCheck, FaTimes, FaCog } from "react-icons/fa";

function TodosLoading() {
  return (
    <li className={styles.TodosLoading}>
      <span>
        <IconContext.Provider value={{ className: "Icon__check" }}>
          <FaCheck />
        </IconContext.Provider>
      </span>
      <p>
        {" "}
        Loading...{" "}
        <IconContext.Provider value={{ className: "Icon__info rotate" }}>
          <FaCog />
        </IconContext.Provider>
      </p>
      <span>
        <IconContext.Provider value={{ className: "Icon__xmark" }}>
          <FaTimes />
        </IconContext.Provider>
      </span>
    </li>
  );
}

export { TodosLoading };
