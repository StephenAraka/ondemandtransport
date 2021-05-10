import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../Navbar';

const AdminLinksPage = (props) => {
  return (
    <div className="AdminLinksPage Page">
      <Navbar />
      <div className="Form">
        <div className="FormTitle"></div>

        <Link to='/login' className="LandingLoginBtn">
          Add manager
        </Link>

        <Link to='/login' className="LandingLoginBtn">
          Add driver
        </Link>

        <Link to='/login' className="LandingLoginBtn">
          Add route
        </Link>

        <Link to='/login' className="LandingLoginBtn">
          Add zones
        </Link>

        <Link to='/login' className="LandingLoginBtn">
          Add bus stop
        </Link>

        <Link to='/login' className="LandingLoginBtn">
          Add bus
        </Link>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => (
  { user: state.user }
);

export default connect(
  mapStateToProps
)(withRouter(AdminLinksPage));
