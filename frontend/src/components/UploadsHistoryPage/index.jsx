import React from 'react';
import Header from '../Header';
import Navbar from '../Navbar'
import { ReactComponent as History } from '../../assets/images/history.svg';
import './UploadsHistoryPage.css';

const UploadsHistoryPage = () => {
  return (
    <div className="UploadsHistoryPage Page">
      <Navbar showClose />

      <Header label="My uploads history" icon={<History className="Icon" />} />

      <section>
        table of uploads history
      </section>
    </div>
  )
}

export default UploadsHistoryPage;
