import React from "react";
import styles from "./todo.module.css";
import { useDispatch } from "react-redux";
import { deleteTodoById, setIsChecked } from "../../../../redux/slices/todos";
import Delete from "../../../../picture/delete3.png"

export default function Todo({ todo, tabs }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapperTodoandDelete}>
      <div
        key={todo.id}
        className={styles.wrapperTodo}
        onClick={() => {
          dispatch(setIsChecked(todo.id));
        }}
      >
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => {}}
        />{" "}
        <span
          className={
            todo.completed
              ? `${styles.textTodo} ${styles.stroke}`
              : styles.textTodo
          }
        >
          {" "}
          {todo.text}
        </span>
        
      </div>
        {tabs[2].isActive && (
          <span>
          <img
          className={styles.path}
          src={Delete}
          alt="del"
          onClick={() => dispatch(deleteTodoById(todo.id))}
          />
         </span>
        )} 
      </div>
      
    );
  }