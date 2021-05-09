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
import TutorialPage from './components/TutorialTodo';
import MenuPage from './components/MenuPage';
import TutorialSupportPage from './components/TutorialSupport';
import ChatPage from './components/ChatPage';
import CallPage from './components/CallPage';
import EvidencePage from './components/EvidencePage';
import FindCenterPage from './components/FindCenterPage';
import ResourcesPage from './components/ResourcesPage';
import PolicyPage from './components/PolicyPage';
import UploadsHistoryPage from './components/UploadsHistoryPage';
import SecuringMyPhone from './components/SecuringMyPhone';
import FindACommunity from './components/FindACommunity';
import SupportOthers from './components/SupportOthers';
import IdentifyingAbuse from './components/IdentifyingAbuse';
import LearnMore from './components/LearnMore';

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
        <Route path="/privacy-policy" component={PolicyPage} />
        <Route path="/learnmore" component={LearnMore} />
        <ProtectedRoute isAllowed={hasToken} exact path="/" component={App} />
        <ProtectedRoute isAllowed={hasToken} exact path="/tutorial/todo" component={TutorialPage} />
        <ProtectedRoute isAllowed={hasToken} exact path="/support/menu" component={MenuPage} />
        <ProtectedRoute isAllowed={hasToken} exact path="/tutorial/support" component={TutorialSupportPage} />
        <ProtectedRoute isAllowed={hasToken} exact path="/support/chat" component={ChatPage} />
        <ProtectedRoute isAllowed={hasToken} exact path="/support/call" component={CallPage} />
        <ProtectedRoute isAllowed={hasToken} exact path="/support/evidence" component={EvidencePage} />
        <ProtectedRoute isAllowed={hasToken} exact path="/support/evidence/history" component={UploadsHistoryPage} />
        <ProtectedRoute isAllowed={hasToken} exact path="/support/centers" component={FindCenterPage} />
        <ProtectedRoute isAllowed={hasToken} exact path="/support/resources" component={ResourcesPage} />
        <ProtectedRoute isAllowed={hasToken} exact path="/support/resources/securemyphone" component={SecuringMyPhone} />
      </Switch>
    </Router>
  );
};

export default Routes
