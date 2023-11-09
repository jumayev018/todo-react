import React from "react";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>Search</li>
        <li>All</li>
        <li>Completed</li>
        <li>Deleted</li>
      </ul>
    </div>
  );
}
