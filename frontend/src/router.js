import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import store from './redux/store';
import App from './components/TodoPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

// Protected route should have token. If not, login.
const ProtectedRoute = ({ isAllowed, ...props }) => (
  isAllowed
    ? <Route {...props} />
    : <Redirect to="/login" />
);

const hasToken = store.getState().user.accessToken;

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <ProtectedRoute isAllowed={true} exact path="/" component={App} />
        {/* <ProtectedRoute isAllowed={hasToken} exact path="/" component={App} /> */}
      </Switch>
    </Router>
  );
};

export default Routes
