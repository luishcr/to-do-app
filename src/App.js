import { useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TodoForm } from "./components/TodoForm";
import { TodosLoading } from "./components/TodosLoading";
import { Modal } from "./components/Modal";
import { IconContext } from "react-icons";
import { FaExclamationTriangle } from "react-icons/fa";

const defaultTodos = [
  // { text: "Learn JavaScript", completed: true },
  // { text: "Create a react app", completed: true },
  // { text: "Learn Nextjs", completed: false },
];

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("ToDos_v1", defaultTodos);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const toggleCheckTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  return (
    <>
      <h1>To-Do App</h1>
      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {error && (
          <h3>
            There is an error!{" "}
            <IconContext.Provider value={{ className: "Icon__info" }}>
              <FaExclamationTriangle />
            </IconContext.Provider>
          </h3>
        )}
        {loading &&
          new Array(3).fill(1).map((a, i) => <TodosLoading key={i} />)}
        {!loading && !searchedTodos.length && (
          <h3>There are not tasks to complete 👍</h3>
        )}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            checkTask={() => toggleCheckTodo(todo.text)}
            deleteTask={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm
            openModal={openModal}
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Modal>
      )}

      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}

export default App;
