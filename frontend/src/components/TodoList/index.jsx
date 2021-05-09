import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchTasks from '../../redux/actions/tasks'
import Todo from '../TodoItem';
import './TodoList.css';
import API_URL from '../../config';

const TodoList = ({ tasks, user, todos, completeTasks, pendingTasks, setTodos, isLoading, setIsLoading, fetchTasks, setIsDeleting, isDeleting, setIsUndoing, isUndoing, tutorial }) => {

  const handleCompleteTask = ({ id, task }) => {
    setIsLoading(true);

    axios.put(`${API_URL}/api/todo/${user.data.id}/${id}`, { id, task, completion: true })      
      .then((res) => {
        fetchTasks(user.data.id);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const setTaskToPending = ({ id, task }) => {
    setIsUndoing(true);

    axios.put(`${API_URL}/api/todo/${user.data.id}/${id}`, { id, task, completion: false })     
      .then((res) => {
        fetchTasks(user.data.id);
        setIsUndoing(false);
      })
      .catch((error) => {
        console.log(error);
        setIsUndoing(false);
      });
  };

  const deleteTask = (id, e) => {
    setIsDeleting(true);

    console.log(e.target.parentNode.getAttribute('key'));

    axios.delete(`${API_URL}/api/todo/${user.data.id}/${id}`)                                 
      .then((res) => {
        fetchTasks(user.data.id);
        setIsDeleting(false);
      })
      .catch((error) => {
        console.log(error);
        setIsDeleting(false);
      });
  };

  useEffect(() => {
    fetchTasks(user.data.id);
  }, [isDeleting, isUndoing, isLoading]);

  return (
    <div className={`TodoList ${(tasks.tasks.length === 0) && 'NoTasks'}`}>
      {pendingTasks.length > 0 && (
        <>
          {pendingTasks.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              isLoading={isLoading}
              isDeleting={isDeleting}
              isUndoing={isUndoing}
              type='pending'
              handleCompleteTask={handleCompleteTask}
              deleteTask={deleteTask}
              setTaskToPending={setTaskToPending}
            />
        ))}
      </>
      )}
      
      {completeTasks.length > 0 && (
        <>
          {completeTasks.length > 0 && completeTasks.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              isLoading={isLoading}
              isUndoing={isUndoing}
              type='complete'
              handleCompleteTask={handleCompleteTask}
              deleteTask={deleteTask}
              setTaskToPending={setTaskToPending}
            />
          ))}
        </>
        )}

      {(completeTasks.length === 0 && pendingTasks.length === 0) && (
        <>
          {tutorial ? (
            <div className="EmptyMessage">
              Your TODO tasks will appear here 
            </div>
          ) : (
            <div className="EmptyMessage">
              You're all clear!<br />No tasks available at the moment.
            </div>
          )}
        </>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { user, tasks } = state;
  return { user, tasks };
};

const mapDispatchToProps = {
  fetchTasks
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TodoList));
