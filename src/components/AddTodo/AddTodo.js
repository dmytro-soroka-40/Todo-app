import React, { useState } from 'react';

const AddTodo = (props) => {
  const [value, setValue] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.trim()) {
      props.onCreate(value.trim());
      setValue('');
    }
  };

  return (
    <form className="todo__form" onSubmit={submitHandler}>
      <div className="todo__input-wrapper">
        <input
          className="todo__input"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="What needs to be done?"
        />
        <button type="submit" className="todo__btn"></button>
      </div>
    </form>
  );
};

export default AddTodo;
