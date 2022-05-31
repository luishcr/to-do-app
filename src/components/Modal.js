import ReactDOM from "react-dom";
import styles from "./Components.module.css";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className={styles.ModalBackground}>{children}</div>,

    document.getElementById("modal")
  );
}

export { Modal };
