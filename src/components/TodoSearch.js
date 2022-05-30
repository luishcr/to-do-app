import styles from "./Components.module.css";
import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
  const inputSearchValue = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.TodoSearch}>
      <input
        onChange={inputSearchValue}
        value={searchValue}
        placeholder="Search or write a new task..."
      />
    </div>
  );
}

export { TodoSearch };
