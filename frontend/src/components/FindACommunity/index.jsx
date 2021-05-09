import React from 'react';
import Header from '../Header';
import './FindACommunity.css';
import {FaUsers} from "@react-icons/all-files/fa/FaUsers";


const FindACommunity = () => {
  return (
    <div className="FindACommunity Page">
      <Header label="Find A Community" />

      <section>
      <h1> Find a Community </h1>

      <FaUsers size="100px" color="#051956"/>

      <p> It is important to remember that you are not alone and there are resources
      available to help you connect with others.  These communities provide support and
      ultimately empower those who are experiencing violence or abuse.  Please refer
      to the information below for more information on finding local support communities. </p>

      <a href="https://www.peaceoverviolence.org/"> Peace Over Violence | Support Organization </a>
      <a href="https://www.wcsap.org/sites/default/files/uploads/working_with_survivors/intimate_partner_sexual_violence/IPSVSupportGroupGuide2009.pdf"> Guide to IPV Support Groups | WCSAP.org </a>
      <a href="https://www.wcspittsburgh.org/partner-violence/"> Women's Shelter of Pittsburgh </a>

      </section>
    </div>
  )
}

export default FindACommunity;
