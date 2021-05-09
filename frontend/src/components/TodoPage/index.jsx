import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchTasks from '../../redux/actions/tasks'
import Navbar from '../Navbar';
import Header from '../Header';
import '../../App.css';

function App(props) {
  return (
    <div className="TodoPage Page">
      <Navbar />

      <Header showGreeting />

        <section>
          
        </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { user, tasks } = state;
  return { user, tasks };
};

const mapDispatchToProps = {
  fetchTasks
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
