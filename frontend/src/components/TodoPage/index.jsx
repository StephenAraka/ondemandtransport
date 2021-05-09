import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchTasks from '../../redux/actions/tasks'
import Form from '../Form';
import TodoList from '../TodoList';
import Spinner from '../Spinner';
import '../../App.css';
import Navbar from '../Navbar';
import Header from '../Header';

function App(props) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'Workout',
      completion: false
    },
    {
      id: 2,
      task: 'Go shopping',
      completion: false
    },
    {
      id: 3,
      task: 'Meet with Dan',
      completion: false
    },
    {
      id: 4,
      task: 'Check emails',
      completion: false
    },
    {
      id: 5,
      task: 'Meditate',
      completion: false
    },
    {
      id: 6,
      task: 'Start the design',
      completion: true
    },
    {
      id: 7,
      task: 'Backup photos',
      completion: true
    }
  ]);
  const [isFetchingTasks, setFetchingTasks] = useState(false);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUndoing, setIsUndoing] = useState(false);
  const [completeTasks, setCompleteTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);


  const getTasks = () => {
    setFetchingTasks(true);             // dislay loading spinner while fetching tasks
    props.fetchTasks(props.user.data.id);
    setFetchingTasks(false);
  };

  useEffect(() => {
    const filterTasks = () => {
      setCompleteTasks(props.tasks.tasks.filter((todo) => todo.completion === true));
      setPendingTasks(props.tasks.tasks.filter((todo) => todo.completion === false));
    }

    filterTasks();
  }, [props.tasks]);

  useEffect(() => {
    getTasks()
  }, []);

  return (
    <div className="TodoPage Page">
      <Navbar />

      <Header showGreeting />

      {isFetchingTasks ? <Spinner /> : (
        <section>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            pendingTasks={pendingTasks}
            completeTasks={completeTasks}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isDeleting={isDeleting}
            setIsDeleting={setIsDeleting}
            isUndoing={isUndoing}
            setIsUndoing={setIsUndoing}
          />

          <Form
            placeholder="Enter task todo"
            fetchTasks={fetchTasks}
            isAddingTask={isAddingTask}
            setIsAddingTask={setIsAddingTask}
          />
        </section>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { user, tasks } = state;
  return { user, tasks };
};

const mapDispatchToProps = {
  fetchTasks
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
