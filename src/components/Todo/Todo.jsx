import React from "react";

import { ACTIONS } from "../../exports/exports";

import styles from "./Todo.module.css";

export default function Todo({ todo, dispatch }) {
  return (
    <div className={styles.todo}>
      <p style={{ color: todo.completed ? "#aaa" : "#000" }}>{todo.value}</p>
      <div className={styles.btnC}>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          {todo.completed ? "incomplete" : "complete"}
        </button>
        <button
          disabled={todo.completed ? true : false}
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          delete
        </button>
      </div>
    </div>
  );
}
