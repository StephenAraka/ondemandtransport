import React from 'react';
import Header from '../Header';
import './PolicyPage.css';
import {FaEnvelope} from "@react-icons/all-files/fa/FaEnvelope";
import {FaEyeSlash} from "@react-icons/all-files/fa/FaEyeSlash";
import {FaBeer} from "@react-icons/all-files/fa/FaBeer";

const PolicyPage = () => {
  return (
    <div className="PolicyPage Page">
      <Header label="Privacy Policy" />

      <section>
        <FaEnvelope size="100px" color="#051956"/>
        <p> Welcome to Eirrands!  We value your privacy and our goal is to provide
        you with a to-do app that does not include "worry about my information" as a task.
        We only collect your email address to ensure that you can keep track of your
        tasks and any other information you upload.  A name is required to register,
        but this information is only used to great you! </p>

        <FaEyeSlash size="100px" color="#051956"/>
        <p> We take pride in providing a safe and private user experience.  Therefore, we cannot see or read
        any task that you decide to include in your list of to-dos.  Additionally, we do not share any information that you share with us.</p>

      </section>
    </div>
  )
}

export default PolicyPage;
