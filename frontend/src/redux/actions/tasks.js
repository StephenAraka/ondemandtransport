import axios from 'axios';
import API_URL from '../../config';
import {
  FETCH_TASKS,
} from './actionTypes';


const getTasks = (response) => ({
  type: FETCH_TASKS,
  payload: response.data
});

const fetchTasks = (userID) => (dispatch) => {

  axios.get(`${API_URL}/api/todo/${userID}`)
    .then((response) => dispatch(getTasks(response)))
    .catch((error) => console.log(error));
};

export default fetchTasks;

