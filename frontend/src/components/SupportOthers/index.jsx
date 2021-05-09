import React from 'react';
import Header from '../Header';
import './SupportOthers.css';
import {FaUserFriends} from "@react-icons/all-files/fa/FaUserFriends";


const SupportOthers = () => {
  return (
    <div className="SupportOthers Page">
      <Header label="Support Others" />

      <section>
      <h1> Support Others </h1>

      <FaUserFriends size="100px" color="#051956"/>

      <p> One of the most critical things we can do is to assure others that they
      are not alone in their time of need.  For those experiencing any kind of
      intimate partner violence, this support can come in many forms and simply
      being there for someone who needs it can make a world of difference.
      If you would like to get more involved in helping others, please contact your
      local support centers for information.  Additionally, you can refer below for more information.</p>

      <a href="https://www.peaceoverviolence.org/"> Peace Over Violence | Support Organization </a>
      <a href="https://www.elle.com/culture/g35469750/ipv-donation-portal/"> How to Help Survivors of intimate Partner Violence </a>
      <a href="https://nwc.edu/title9/support-healing/how-to-respond-IPV"> How to Respond to an Intimate Partner Violence Survivor | Northwest College </a>
      <a href="https://online.rider.edu/online-bachelors-degrees/nursing/intimate-partner-violence-guide/"> Intimate Partner Violence Prevention & Intervention Guide | Rider Univeristy </a>
      </section>
    </div>
  )
}

export default SupportOthers;
