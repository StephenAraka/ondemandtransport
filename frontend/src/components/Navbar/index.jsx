import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import removeUser from '../../redux/actions/removeUser';
import { ReactComponent as MenuIcon } from '../../assets/images/menu-dots.svg';
import { ReactComponent as Close } from '../../assets/images/close.svg';
import { ReactComponent as Arrow } from '../../assets/images/arrow.svg';
import './Navbar.css';
import Logo from '../Logo';

const Navbar = ({ showTutorialTodo, showTutorialSupport, showClose, removeUser }) => {
  const [showMenu, setshowMenu] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const logout = () => {
    localStorage.removeItem('state');
    localStorage.removeItem('token');
    removeUser();
    window.location.href = "/login";
  };

  const gotoNextTutorial = () => {
    window.location.href = "/tutorial/support";
  }

  const closeTutorial = () => {
    window.location.href = "/";
  }

  const handleClick = () => {
    if (showClose) {
      window.location.replace("/");

    } else {
      setClickCount(clickCount+1);

      if (clickCount === 4) {
        window.location.href = "/support/menu";
      } else {
        setshowMenu(!showMenu);
      }
    }
  }
  
  return (
    <div className="Navbar">
      <Logo small />
      <div onClick={handleClick} >
        {showClose ? ( <Close className="Icon" /> ) : (<MenuIcon className="Icon" />)}
        {showTutorialTodo || showTutorialSupport ? (
          <>
            {showTutorialTodo && (
              <div className="MenuWrapper">
                <div className="Tutorial">
                  <div className="Arrow"><Arrow /></div>
                  <p>This is your menu. Click here to access your settings or to logout. <br /><br /> To access help, click it 5 times in succession.</p>
                  <div className="GotIt" onClick={gotoNextTutorial}>OK, GOT IT</div>
                </div>
              </div>
            )}

            {showTutorialSupport && (
              <div className="MenuWrapper">
                <div className="Tutorial">
                  <div className="Arrow"><Arrow /></div>
                  <p>Click here at any time to exit back to your ToDo list app.</p>
                  <div className="GotIt" onClick={closeTutorial}>OK, GOT IT</div>
                </div>
              </div>
            )}

          </>

        ) : (
          <>
            {showMenu && (
              <div className="MenuWrapper">
                <div className="DropdownMenu">
                  <div className="DropdownItem">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </div>
                  <div className="DropdownItem">
                    <div role="presentation" onClick={logout}>Logout</div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => (
  { user: state.user }
);

const mapDispatchToProps = {
  removeUser
};

Navbar.propTypes = {
  removeUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar));
