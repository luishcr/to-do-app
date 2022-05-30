import styles from "./Components.module.css";
import { IconContext } from "react-icons";
import { FaPlusCircle } from "react-icons/fa";

function CreateTodoButton() {
  const addNewTask = () => {
    console.log("New Task Added");
  };

  return (
    <div className={styles.CreateTodoBtn}>
      <button onClick={addNewTask}>
        <IconContext.Provider value={{ className: "Icon__plus" }}>
          <FaPlusCircle />
        </IconContext.Provider>
      </button>
    </div>
  );
}

export { CreateTodoButton };
