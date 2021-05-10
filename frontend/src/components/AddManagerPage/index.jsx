import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import saveUser from '../../redux/actions/saveUser';
import { isValidEmail, isValidUsername, trimmed } from '../../helpers';
import Button from '../Button';
import InputTextField from '../InputText';
import './AddManager.css';
import Navbar from '../Navbar';

const AddManagerPage = (props) => {
  const [user, setUser ] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (error) {
      setError('');
    }

    setUser({
      ...user,
      [name]: value
    });
  };

  const handleRegister = () => {
    const { firstname, lastname, email, phone, address } = user;

    //* Trim user details
    const userInfo = {
      firstname,
      lastname,
      email: trimmed(email),
      phone,
      address
    }
    
    if (!userInfo.firstname || !userInfo.lastname || !userInfo.email || !userInfo.address || !userInfo.phone ) {
      setError('All fields are required');
      return;
    }

    if (!isValidUsername(userInfo.firstname)) {
      setError('Firstname can only contain letters and numbers');
      return;
    }

    if (!isValidUsername(userInfo.lastname)) {
      setError('Lastname can only contain letters and numbers');
      return;
    }

    if (!isValidEmail(userInfo.email)) {
      setError('Invalid email address');
      return;
    }
    
    console.log(userInfo)

    axios.post('/api/WeGo/Manager', user)

      .then(res => {
        console.log(res.data);
        debugger
        // props.saveUser(res.data);
        alert('Manager added successfully')
        //! Once they've registered, redirect them to the tutorial page
        window.location.href = "/";
      })
      .catch((err) => {
        setError('Registration failed.');
        debugger
        console.log(err);
      });
  };

  useEffect(() => {
    // remove the current state from local storage
    // so that when a person logs in they dont encounter
    // the previous state which wasnt cleared
    localStorage.removeItem('state');
  }, []);

  return (
    <div className="AddManagerPage Page">
      <Navbar />
      <div className="Form">
        <div className="FormTitle">Add manager</div>

        <InputTextField
          required
          type="text"
          name="firstname"
          value={user.firstname}
          placeholder="First Name"
          onChange={handleChange}
        />

        <InputTextField
          required
          type="text"
          name="lastname"
          value={user.lastname}
          placeholder="Last Name"
          onChange={handleChange}
        />

        <InputTextField 
          required
          type="text"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={handleChange}
        />

        <InputTextField 
          required
          type="number"
          name="phone"
          value={user.phone}
          placeholder="Phone"
          onChange={handleChange}
        />

        <InputTextField 
          required
          type="text"
          name="address"
          value={user.address}
          placeholder="Address"
          onChange={handleChange}
        />

        {error && (
          <div className="Error">
            {error}
          </div>
        )}

        <Button
          label="add manager"
          onClick={handleRegister}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => (
  { user: state.user }
);

const mapDispatchToProps = {
  saveUser
};

AddManagerPage.propTypes = {
  saveUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddManagerPage));
