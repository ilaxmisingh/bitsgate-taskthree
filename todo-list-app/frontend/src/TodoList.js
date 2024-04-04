// TodoList.js

import React, { useState, useEffect } from 'react';
import './todolist.css'; // Import the CSS file

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newTodo }),
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to add todo');
        }
      })
      .then(data => {
        setTodos([...todos, data]);
        setNewTodo('');
      })
      .catch(error => console.error('Error adding todo:', error));
    }
  };

  const handleDeleteTodo = (id) => {
    fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setTodos(todos.filter(todo => todo._id !== id));
      } else {
        throw new Error('Failed to delete todo');
      }
    })
    .catch(error => console.error('Error deleting todo:', error));
  };

  const handleToggleCompleted = (id, completed) => {
    fetch(`/api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !completed }),
    })
    .then(response => {
      if (response.ok) {
        setTodos(todos.map(todo => todo._id === id ? { ...todo, completed: !completed } : todo));
      } else {
        throw new Error('Failed to update todo');
      }
    })
    .catch(error => console.error('Error updating todo:', error));
  };

  return (
    <div className="todo-list-container">
      <h2>Todo List</h2>
      <input
        className="todo-input"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button className="todo-button" onClick={handleAddTodo}>Add Todo</button>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo._id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(todo._id, todo.completed)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button className="todo-button todo-delete-button" onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
