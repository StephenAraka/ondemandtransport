import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import store from './redux/store';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import LandingPage from './components/LandingPage';
import ZonesPage from './pages/ZonesPage';
import RoutesPage from './pages/RoutesPage';
import DriversPage from './pages/DriversPage';
import BusstopsPage from './pages/BusstopsPage';

// Protected route should have token. If not, login.
// const ProtectedRoute = ({ isAllowed, ...props }) => (
//   isAllowed
//     ? <Route {...props} />
//     : <Redirect to="/login" />
// );

// const hasToken = store.getState().user.accessToken;

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/zones" component={ZonesPage} />
        <Route exact path="/drivers" component={DriversPage} />
        <Route exact path="/busstops" component={BusstopsPage} />
        <Route exact path="/routes" component={RoutesPage} />
        {/* <ProtectedRoute isAllowed={hasToken} exact path="/" component={App} /> */}
      </Switch>
    </Router>
  );
};

export default Routes
