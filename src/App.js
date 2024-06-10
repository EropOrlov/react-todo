import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import ToDoForm from './components/Todos/ToDoForm';
import ToDoList from './components/Todos/ToDoList';
import ActionButtons from './components/buttons/ActionButtons';

function App() {
  const [todos, setTodos] = useState([]);
  function addTodo(title) {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function removeTodo(index) {
    setTodos(todos.filter((todo) => todo.id !== index));
  }

  function completeTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function removeCompletedTodos() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  function removeAllTodos() {
    setTodos([]);
  }

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="bg-stone-800 max-h-max grid grid-rows-[1fr_max-content] gap-4 py-6">
      <ToDoForm addTodo={addTodo} />
      {!!todos.length && (
        <ActionButtons
          removeCompletedTodos={removeCompletedTodos}
          removeAllTodos={removeAllTodos}
          disable={!completedCount}
        />
      )}
      {!!todos.length ? (
        <ToDoList
          todos={todos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ) : (
        <p className="text-2xl text-white text-center">Empty</p>
      )}

      {!!completedCount && (
        <p className="text-2xl text-white text-center">
          You've completed {completedCount}{' '}
          {completedCount > 1 ? 'tasks' : 'task'}
        </p>
      )}
    </div>
  );
}

export default App;
