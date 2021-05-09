import React from 'react';
import Navbar from '../Navbar'
import Header from '../Header';
import { ReactComponent as Phone } from '../../assets/images/phone.svg';
import { ReactComponent as Call } from '../../assets/images/call-sec.svg';
import './CallPage.css';


const CallPage = () => {
  return (
    <div className="CallPage Page">
      <Navbar showClose />

      <Header label="Call a support hotline" icon={<Call className="Icon" />} />

      <section>
        <div className="PhoneWrapper">
          <a href="tel:+1-800-799-7233">
            <div className="Phone">
              <Phone className="Icon PhoneIcon" />
            </div>
          </a>
        </div>
        <div className="PhoneMessage">Speak to a trained expert advocate to get free, confidential, and compassionate support from the National Domestic Violence Hotline.</div>
      </section>
    </div>
  )
}

export default CallPage;
