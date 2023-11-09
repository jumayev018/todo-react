import { useReducer, useState } from "react";
import { ACTIONS } from "../../exports/exports";
import Todo from "../Todo/Todo.jsx";
import styles from "./Form.module.css";
import icon from "../../assets/three-dots-vertical.png";

const newTodo = (value) => {
  return { id: Date.now(), value: value, completed: false };
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      const newTodos = [...todos];
      newTodos.unshift(newTodo(action.payload.value));

      return newTodos;
    }

    case ACTIONS.TOGGLE_TODO: {
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    }

    case ACTIONS.DELETE_TODO: {
      return todos.filter((todo) => todo.id !== action.payload.id);
    }
  }
};

export default function Form() {
  const [value, setValue] = useState("");
  const changeHandler = (e) => setValue(e.target.value);

  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
    if(value === ""){
      return
    }
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { value: value },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.text}>Todo list</h1>
        <input
          id={styles.input}
          type="text"
          placeholder="add task"
          value={value}
          onChange={changeHandler}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}
