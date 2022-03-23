import React from 'react';

const DeleteCompleteTodo = (props) => {
  return (
    <button
      onClick={props.deleteComplete}
      className="todo__delete-btn todo__delete-btn_complete"
    >
      Clear completed
    </button>
  );
};

export default DeleteCompleteTodo;
