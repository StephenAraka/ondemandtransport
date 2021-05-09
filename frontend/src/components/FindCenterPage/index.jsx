import React, { useState } from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import { ReactComponent as Shelter } from '../../assets/images/shelter-sec.svg';
import InputTextField from '../InputText';
import './FindCenterPage.css';

const FindCenterPage = () => {
  const [zip, setZip] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setZip(value);
  };

  return (
    <div className="FindCenterPage ChatPage Page">
      <Navbar showClose />

      <Header label="Find a support center" icon={<Shelter className="Icon" />} />

      <section>
        <div className="ChatMessage PhoneMessage">Find help at a nearby center.</div>
        <InputTextField
          required
          type="text"
          name="zip"
          value={zip}
          placeholder="Zip Code"
          onChange={handleChange}
        />
      </section>
    </div>
  )
}

export default FindCenterPage;
