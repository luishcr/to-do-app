import styles from "./Components.module.css";
import { IconContext } from "react-icons";
import { BsPlusCircleFill } from "react-icons/bs";

function CreateTodoButton({ openModal, setOpenModal }) {
  const addNewTask = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className={styles.CreateTodoBtn}>
      <button onClick={addNewTask}>
        <IconContext.Provider value={{ className: "Icon__plus" }}>
          <BsPlusCircleFill />
        </IconContext.Provider>
        <div className="description">Add to-dos!</div>
      </button>
    </div>
  );
}

export { CreateTodoButton };
