import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = (props) => {
  return (
    <ul className="todo__list">
      {props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};

export default TodoList;
