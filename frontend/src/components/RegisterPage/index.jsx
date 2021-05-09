import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import saveUser from '../../redux/actions/saveUser';
import { isValidEmail, isValidUsername, trimmed } from '../../helpers';
import Button from '../Button';
import InputTextField from '../InputText';
import Logo from '../Logo';
import './RegisterPage.css';
import API_URL from '../../config';

const RegisterPage = (props) => {
  const [user, setUser ] = useState({
    name: '',
    email: '',
    password: ''
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
    const { name, email, password } = user;

    //* Trim user details
    const userInfo = {
      name: trimmed(name),
      email: trimmed(email),
      password: trimmed(password)
    }
    
    if (!userInfo.email || !userInfo.password || !userInfo.name) {
      setError('All fields are required');
      return;
    }

    if (!isValidUsername(userInfo.name)) {
      setError('Username can only contain letters and numbers');
      return;
    }

    if (!isValidEmail(userInfo.email)) {
      setError('Invalid email address');
      return;
    }
    
    console.log(userInfo)
    axios.post(`${API_URL}/api/user/register`, user)
      .then(res => {
        console.log(res.data)
        ;
        props.saveUser(res.data);
        //! Once they've registered, redirect them to the tutorial page
        window.location.href = "/tutorial/todo";
      })
      .catch((err) => {
        setError('Registration failed.');
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
    <div className="RegisterPage Page">
      <div className="LoginLogo">
        <Logo />
        <div className="AppName">Eirrands</div>
        doing lots has never been easier
      </div>

      <div className="Form">
        <div className="FormTitle">sign up</div>

        <InputTextField
          required
          type="text"
          name="name"
          value={user.name}
          placeholder="Name"
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
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={handleChange}
        />

        {error && (
          <div className="Error">
            {error}
          </div>
        )}

        <Button
          label="register"
          onClick={handleRegister}
        />

        <div className="AlternativeLink">
          Have an account? <Link to='/login'>Login here</Link>
        </div>

        <div className="AlternativeLink PolicyLink">
          <Link to='/privacy-policy'>Privacy Policy</Link> | <Link to='/contact-us'>Contact Us</Link>
        </div>
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

RegisterPage.propTypes = {
  saveUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RegisterPage));
