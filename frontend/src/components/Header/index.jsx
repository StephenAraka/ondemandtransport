import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Moon } from '../../assets/images/moon.svg';
import { ReactComponent as SunUp } from '../../assets/images/sun-up.svg';
import { ReactComponent as SunDown } from '../../assets/images/sun-down.svg';
import getGreeting from '../../helpers/getGreeting';

import './Header.css';

const Header = ({ user, showGreeting, label, icon }) => {
  const{ name } = user.data;
  
  return (
    <header>
      <div>
        <div className="Greeting">{showGreeting ? <>{getGreeting()}<br />{name}</> : label}</div>
        <div className="TimeIcon">
          {showGreeting ? (
            <>
              {getGreeting().includes("morning") && <SunDown className="Icon" />}
              {getGreeting().includes("afternoon") && <SunUp className="Icon" />}
              {getGreeting().includes("evening") && <Moon className="Icon" />}
            </>
          ) : (
              <>
                {icon}
              </>
          )}
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps)(withRouter(Header));
