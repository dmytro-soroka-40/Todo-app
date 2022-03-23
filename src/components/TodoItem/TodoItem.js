import React, { useState, useContext } from 'react';
import Context from '../../context';

const TodoItem = (props) => {
  const { removeTodo, toggleTodo, changeTodo } = useContext(Context);

  return (
    <li className="todo__item">
      <label className="todo__text">
        <input
          type="checkbox"
          className="todo__checkbox"
          checked={props.todo.completed}
          onChange={() => toggleTodo(props.todo.id)}
        />

        <span>
          <input
            className={
              props.todo.completed
                ? 'todo__input-change done'
                : 'todo__input-change'
            }
            value={props.todo.title}
            disabled={props.todo.completed}
            onChange={(e) => {
              if (e.target.value < 1) {
                removeTodo(props.todo.id);
              } else {
                changeTodo(props.todo.id, e.target.value);
              }
            }}
          />
        </span>
      </label>

      <button
        type="button"
        className="todo__delete"
        onClick={() => removeTodo(props.todo.id)}
      ></button>
    </li>
  );
};

export default TodoItem;
