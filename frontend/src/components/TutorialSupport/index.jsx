import React from 'react';
import Header from '../Header';
import LinksGroup from '../LinksGroup';
import Navbar from '../Navbar';


const TutorialSupportPage = () => {
  const links=[
    {
      label: "Chat with support",
      link: "#"
    },
    {
      label: "Call support",
      link: "#"
    },
    {
      label: "Evidence tracking",
      link: "#"
    },
    {
      label: "Find a support center",
      link: "#"
    },
    {
      label: "Security & privacy resources",
      link: "#"
    },
  ]
  
  return (
    <div className="MenuPage Page">
      <Navbar showTutorialSupport showClose />

      <Header showGreeting />

      <section>
        <LinksGroup
          links={links}
        />
      </section>
    </div>
  )
}

export default TutorialSupportPage;
