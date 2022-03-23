import React, { useState } from 'react';
import Context from './context';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import DeleteAllTodo from './components/DeleteAllTodo/DeleteAllTodo';
import DeleteCompleteTodo from './components/DeleteCompeteTodo/DeleteCompleteTodo';
import TodoData from './components/TodoData';

const App = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : TodoData
  );

  const todosActive = todos.filter((todo) => todo.completed === false);
  const todosCompleted = todos.filter((todo) => todo.completed === true);

  const setTodosWithSave = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const addTodo = (title) => {
    setTodosWithSave(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  };

  const toggleTodo = (id) => {
    setTodosWithSave(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodosWithSave(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const deleteAllTodos = () => {
    setTodosWithSave([]);
  };

  const deleteCompleteTodos = () => {
    setTodosWithSave(todosActive);
  };

  const changeTodo = (id, newValue) => {
    setTodosWithSave(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = newValue;
        }
        return todo;
      })
    );
  };

  return (
    <Context.Provider value={{ removeTodo, toggleTodo, changeTodo }}>
      <div className="todo">
        <h1 className="todo__title">todos.</h1>
        <div className="todo__wrapper">
          <AddTodo onCreate={addTodo} />
          <TodoList todos={[...todosActive, ...todosCompleted]} />
          <div className="todo__btns">
            <DeleteAllTodo deleteAll={deleteAllTodos} />
            <DeleteCompleteTodo deleteComplete={deleteCompleteTodos} />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
