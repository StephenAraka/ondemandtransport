import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Navbar from '../Navbar';

const MyRidesPage = (props) => {
  const [rides, setrides] = useState([]);

  useEffect(() => {
    // remove the current state from local storage
    // so that when a person logs in they dont encounter
    // the previous state which wasnt cleared
    const id = localStorage.getItem('id');
    axios.get(`/rides/${id}`)
    .then((res) =>{
      setrides(res.data)
    })
    .catch(err => {
      console.log(err)
    })


  }, []);

  return (
    console.log(rides),
    <div className="MyRidesPage Page">
      <Navbar />
      <div className="Form">
        <div className="FormTitle"></div>

        <div className="Ride">
          <div className="Date">Tuesday</div>
          <div className="Departure">Departure</div>
          <div className="Dest">Destination</div>
        </div>

        

      </div>
    </div>
  )
}

const mapStateToProps = (state) => (
  { user: state.user }
);

export default connect(
  mapStateToProps
)(withRouter(MyRidesPage));
