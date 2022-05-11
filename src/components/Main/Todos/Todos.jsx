import React from "react";
import styles from "./todos.module.css";

export default function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div className={styles.inputbox1}>
        <p>
           <input className={styles.inputbox} type="checkbox" />
          {todo.text} была создана {todo.date.toLocaleString()}
        </p>
</div>

      ))}
      
  
    </div>
  );
}