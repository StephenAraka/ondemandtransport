import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import saveUser from '../../redux/actions/saveUser';
import { isValidEmail, trimmed } from '../../helpers';
import Button from '../Button';
import Logo from '../Logo';
import { ReactComponent as TaxiImg } from '../../assets/images/taxi.svg';
import InputTextField from '../InputText';
import API_URL from '../../config';
import './LandingPage.css';

const LandingPage = (props) => {
  return (
    <div className="LandingPage Page">
      <div className="LoginLogo">
        <TaxiImg className="TaxiImg" />
        <div className="AppName">on demand transport</div>
        <div className="Slogan">Get there without a hussle</div>
      </div>

      <div className="ButtonSection">
        <div className="TitleWrapper">
        <div className="AppName">on demand transport</div>
        Get there without a hussle
        </div>
        <Link to='/login' className="LandingLoginBtn">
          Login
        </Link>

        <div className="AlternativeLink">
          <Link to='/register'>Or create an account</Link>
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

LandingPage.propTypes = {
  saveUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LandingPage));
