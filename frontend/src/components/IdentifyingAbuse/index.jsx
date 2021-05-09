import React from 'react';
import Header from '../Header';
import './IdentifyingAbuse.css';
import {FaUsers} from "@react-icons/all-files/fa/FaUsers";


const IdentifyingAbuse = () => {
  return (
    <div className="IdentifyingAbuse Page">
      <Header label="Identifying Abuse" />

      <section>
      <h1>Identifying Abuse </h1>


      <p>Oftentimes it can be difficult to fully grasp when intimate partner violence
      is taking place, especially when it is happening to you.  Some things may not
      seem like abuse when they are happening, and it is only afterwards that we may
      look back and realize that something is wrong.  Please refer to the list below to
      help you identify signs of intimate partner violence.  This information was gathered
      from information published by Rider University.  Please refer to the link provided
      for more information. </p>

      <h1> Signs of Psychological Abuse </h1>

      <ul>
        <li>Intentionally causing you embarrassment</li>
        <li>Degrading or insulting you</li>
        <li>“Keeping tabs” on you (constantly asking where you are, who you are with, etc)</li>
        <li>Demanding access to your online accounts</li>
        <li>Discouraging you from seeing your friends or family</li>
        <li>Preventing you from going to work or school</li>
        <li>Discouraging you from engaging in your hobbies</li>
        <li>Being jealous, controlling, manipulative</li>
        <li>Getting upset or angry to the point where they are unpredictable</li>
        <li>Destroying or damaging your property</li>
        <li>Making everyday decisions for you (what to eat, what to wear, etc)</li>
      </ul>

      <h1> Signs of Physical Abuse </h1>

      <ul>
        <li>Threats or attempts to harm you, your children, your pets, others</li>
        <li>Hurting you physically (including: shoving, pushing, beating, punching, slapping, kicking, biting, or any other form of harmful physical contact)</li>
        <li>Threatening to use weapons on you</li>
        <li>Abandoning (or threatening to abandon) you in an unfamiliar place</li>
        <li>Physically controlling what you do (i.e. preventing you from eating, sleeping)</li>
        <li>Threats of harm if you try to report them</li>
      </ul>


      <h1> Signs of Sexual Abuse </h1>

      <ul>
        <li>Forcing you to have sex/engage in physically intimacy (regardless if you want to or not)</li>
        <li>Forcing you to dress sexually or in a certain way</li>
        <li>They assume that previous consent means you want to engage again</li>
        <li>Intentionally trying to spread STD to you</li>
      </ul>

      <p>This information was published by Rider University.  Please refer to the link provided for more information</p>

    <a href="https://online.rider.edu/online-bachelors-degrees/nursing/intimate-partner-violence-guide/"> Intimate Partner Violence Prevention & Intervention Guide | Rider Univeristy </a>

      </section>
    </div>
  )
}

export default IdentifyingAbuse;
