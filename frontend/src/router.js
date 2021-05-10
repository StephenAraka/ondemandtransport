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
import AddManagerPage from './components/AddManagerPage';
import AddDriverPage from './components/AddDriverPage';
import AdminLinksPage from './components/AdminLinksPage';
import PassengerLinksPage from './components/PassengerLinksPage';

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
        <Route exact path="/admin" component={AdminLinksPage} />
        <Route exact path="/passenger" component={PassengerLinksPage} />
        <Route exact path="/admin/add-manager" component={AddManagerPage} />
        <Route exact path="/admin/add-driver" component={AddDriverPage} />
        {/* <ProtectedRoute isAllowed={hasToken} exact path="/" component={App} /> */}
      </Switch>
    </Router>
  );
};

export default Routes
