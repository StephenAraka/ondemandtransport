import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './DriversPage.css';
import axios from 'axios';
import Button from '../../components/Button';
import { trimmed } from '../../helpers';
import InputTextField from '../../components/InputText';


const DriversPage = (props) => {
    const [driver, setDriver] = useState({
        firstname: '',
        lastname: '',
        address: '',
        telephone: '',
        profilePicture: ''
    });
    const [error, setError] = useState('');
    const handleChange = ({ target }) => {
        const { name, value } = target;
    
        if (error) {
          setError('');
        }
    
        setDriver({
          ...driver,
          [name]: value
        });
    };
    useEffect(() => {
        // remove the current state from local storage
        // so that when a person logs in they dont encounter
        // the previous state which wasnt cleared
        localStorage.removeItem('state');
    }, []);

    const submit = () => {
        const { firstname, lastname, address, telephone, profilePicture } = driver;
    
        const driverInfo = {
          firstname: trimmed(firstname),
          lastname: trimmed(lastname),
          address: trimmed(address),
          telephone: trimmed(telephone),
          profilePicture: trimmed(profilePicture),
        }
    
        if (!driverInfo.firstname || !driverInfo.lastname || !driverInfo.address || !driverInfo.telephone || !driverInfo.profilePicture  ) {
          setError('All fields are required');
          return;
        }
        
        console.log(driverInfo);
        // Needs to be changed
        axios.post('/api/WeGo/users', driverInfo)             
          .then(res => {
            // save user data to store
            props.saveUser(res.data);
            // add access token to localstorage
            localStorage.setItem('token', res.data.id);
            
            window.location.href = "/";
          })
          .catch((err) => {
            setError('Incorrect email or password.');
            console.log(err);
        });
    };
    
    return(
        <div className="Page">
            <div className="Form">
                <div className="FormTitle">Add Driver</div>
        
                <InputTextField
                    required
                    type="text"
                    name="firstname"
                    value={driver.firstname}
                    placeholder="First Name"
                    onChange={handleChange}
                />

                <InputTextField
                    required
                    type="text"
                    name="lastname"
                    value={driver.lastname}
                    placeholder="Last Name"
                    onChange={handleChange}
                />

                <InputTextField
                    required
                    type="text"
                    name="address"
                    value={driver.address}
                    placeholder="Address"
                    onChange={handleChange}
                />

                <InputTextField
                    required
                    type="text"
                    name="telephone"
                    value={driver.telephone}
                    placeholder="Telephone"
                    onChange={handleChange}
                />

                <InputTextField
                    required
                    type="text"
                    name="profilePicture"
                    value={driver.profilePicture}
                    placeholder="Profile Picture"
                    onChange={handleChange}
                />
        
                {error && (
                    <div className="Error">
                    {error}
                    </div>
                )}
        
                <Button
                    label="ADD DRIVER"
                    onClick={submit}
                />
    
            </div>
        </div>
    )

}
export default connect()(withRouter(DriversPage));