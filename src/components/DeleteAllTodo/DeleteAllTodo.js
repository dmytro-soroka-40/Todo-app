import React from 'react';

const DeleteAllTodo = (props) => {
  return (
    <button
      onClick={props.deleteAll}
      className="todo__delete-btn todo__delete-btn_all"
    >
      Clear all
    </button>
  );
};

export default DeleteAllTodo;
