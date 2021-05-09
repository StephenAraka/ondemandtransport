import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchTasks from '../../redux/actions/tasks'
import SmallSpinner from '../Spinner/SmallSpinner';
import InputTextField from '../InputText';
import { ReactComponent as Icon } from '../../assets/images/add.svg';
import './Form.css';
import API_URL from '../../config';

const Form = ({ isAddingTask, fetchTasks, setIsAddingTask, user, placeholder }) => {
  const [task, setTask] = useState('');
  
  const handleInputText = ({ target }) => {
    const { value } = target;

    setTask(value);
  }

  const addTask = () => {
    const newTodo = {
      task,
      completion: false
    };

    setIsAddingTask(true);

    axios.post(`${API_URL}/api/todo/${user.data.id}`, newTodo)
      .then((res) => {
        fetchTasks();
        setIsAddingTask(false);
      })
      .catch((error) => {
        console.log(error);
        setIsAddingTask(false);
      });

    setTask('');
  };

  useEffect(() => {
    fetchTasks(user.data.id);
  }, [isAddingTask]);

  return (
    <div className="AddTaskInput">
      <InputTextField
        name="task"
        value={task}
        onChange={handleInputText}
        placeholder={placeholder}
      />
      <div className="InputIcon">
        {isAddingTask ? <SmallSpinner /> : (
          <div onClick={addTask} >
            <Icon className="Icon" />
          </div>
      )}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Form));

