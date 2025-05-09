/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { A } from 'hookrouter';
import githubIcon from '../../assets/social-links/github.svg';
import './ToDoList-styles.scss';

const ToDoList = () => {
  const [todos, setTodos] = useState([
    {
      content: 'Learn React with hooks',
      color: '#87eba9',
      complete: true,
    },
    {
      content: 'Create full stack applications with the MERN stack',
      color: '#87ceeb',
      complete: true,
    },
    {
      content: 'Learn a new technology',
      color: '#d8bfd8',
      complete: false,
    },
    {
      content: 'Write a Web Development Guide',
      color: '#add8e6',
      complete: false,
    },
  ]);
  const [completedCount, setCompletedCount] = useState(0);
  const [tempTodo, setTempTodo] = useState({
    content: '',
    color: '#ffffff',
    complete: false,
  });
  const [message, setMessage] = useState({
    content: 'Welcome to your To-Do list',
    color: '#12bb29',
  });

  useEffect(() => {
    countCompleted();
  }, []);

  useEffect(() => {
    countCompleted();
  }, [todos]);

  const countCompleted = () => {
    let count = 0;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].complete) {
        count += 1;
      }
    }
    if (count === todos.length) {
      const newMessage = { content: "All To-Do's completed!", color: '#12bb29' };
      setMessage(newMessage);
    }
    setCompletedCount(count);
  };

  const handleCreateTodo = (e) => {
    e.preventDefault();
    const { target } = e;
    if (tempTodo.content === '' || !tempTodo.content.trim()) {
      const newMessage = { content: 'Empty To-Do!', color: '#ec1515' };
      setMessage(newMessage);
    } else {
      addTodo(tempTodo);
      setTempTodo({
        content: '',
        color: '#fff',
        complete: false,
      });
    }
    target.reset();
  };

  const addTodo = (t) => {
    const todosCopy = [...todos];
    let dupe = false;
    for (let i = 0; i < todosCopy.length; i++) {
      if (todosCopy[i].content === t.content) {
        dupe = true;
        const newMessage = { content: 'Duplicate entry', color: '#ec1515' };
        setMessage(newMessage);
      }
    }
    if (dupe === false) {
      const newTodos = [...todosCopy, t];
      setTodos(newTodos);
      const newMessage = { content: 'To-Do Created!', color: '#12bb29' };
      setMessage(newMessage);
    }
  };

  const handleDelete = (i) => {
    const newTodos = [...todos];
    const completed = newTodos[i].complete;
    newTodos.splice(i, 1);
    setTodos(newTodos);
    const newMessage = { content: 'To-Do removed!', color: '#ec1515' };
    setMessage(newMessage);
  };

  const handleCheck = (i) => {
    const newTodos = [...todos];
    newTodos[i].complete = !newTodos[i].complete;
    setTodos(newTodos);
    if (newTodos[i].complete) {
      const newMessage = { content: 'To-Do completed!', color: '#12bb29' };
      setMessage(newMessage);
    } else {
      const newMessage = {
        content: 'To-Do not complete',
        color: '#eac711',
      };
      setMessage(newMessage);
    }
  };

  return (
    <div className='project-page todo-project'>
      <h1 className='page-header'>To-Do List</h1>
      <p>Got things to do? My React Hooks implementation of the classic To-Do List app.</p>
      <section className='todos-container'>
        {todos.length ? (
          <div className='todos'>
            {todos.map((t, i) => {
              return (
                <div className='todo' key={i} style={{ backgroundColor: t.color }}>
                  <div className='checkbox' onClick={() => handleCheck(i)}>
                    <span>{t.complete ? '✔️' : ''}</span>
                  </div>
                  <div className='todo-title'>
                    {t.complete ? (
                      <p>
                        <strike style={{ color: t.color }}>{t.content}</strike>
                      </p>
                    ) : (
                      <p style={{ color: t.color }}>{t.content}</p>
                    )}
                  </div>
                  <span className='delete' role='img' aria-label='delete' onClick={() => handleDelete(i)}>
                    ❌
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <p>Nothing To Do!</p>
          </div>
        )}
      </section>
      <section className='control-container'>
        <form className='create-todo-form' onSubmit={handleCreateTodo}>
          <h5>Add a new To-Do:</h5>
          <div className='todo-inputs'>
            <input
              type='text'
              onChange={(e) =>
                setTempTodo({
                  ...tempTodo,
                  content: e.target.value,
                  complete: false,
                })
              }></input>
            <input
              type='color'
              title='To-Do color'
              defaultValue='#ffffff'
              onChange={(e) => setTempTodo({ ...tempTodo, color: e.target.value })}
            />
          </div>

          <button type='submit' title='Add To-Do'>
            Add To-Do
          </button>
        </form>
        <div className='message-box'>
          <h5>
            To-Do's completed: {completedCount} / {todos.length}
          </h5>
          <p style={{ color: message.color }}>{message.content}</p>
        </div>
      </section>

      <div className='code-container'>
        <h4>Code:</h4>
        <a
          className='github-project-link'
          href='https://github.com/stefanbobrowski/ToDo'
          target='_blank'
          rel='noreferrer'
          title='To-Do List - Github'>
          <div className='github-icon'>
            <img src={githubIcon} alt='Github'></img>
          </div>
          <span>To-Do List</span>
        </a>
      </div>
    </div>
  );
};

export default ToDoList;
