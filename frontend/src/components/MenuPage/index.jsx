import React from 'react';
import Header from '../Header';
import LinksGroup from '../LinksGroup';
import Navbar from '../Navbar';
import { ReactComponent as Call } from '../../assets/images/call.svg';
import { ReactComponent as Chat } from '../../assets/images/chat.svg';
import { ReactComponent as Shelter } from '../../assets/images/shelter.svg';
import { ReactComponent as Save } from '../../assets/images/save.svg';
import { ReactComponent as Lock } from '../../assets/images/lock.svg';


const MenuPage = () => {
  const links=[
    {
      label: "Chat with support",
      link: "/support/chat",
      icon: <Chat className="Icon" />
    },
    {
      label: "Call support",
      link: "/support/call",
      icon: <Call className="Icon" />
    },
    {
      label: "Evidence tracking",
      link: "/support/evidence",
      icon: <Save className="Icon" />
    },
    {
      label: "Find a support center",
      link: "/support/centers",
      icon: <Shelter className="Icon" />
    },
    {
      label: "Security & privacy resources",
      link: "/support/resources",
      icon: <Lock className="Icon" />
    },
  ]
  
  return (
    <div className="MenuPage Page">
      <Navbar showClose />

      <Header showGreeting />

      <section>
        <LinksGroup
          links={links}
        />
      </section>
    </div>
  )
}

export default MenuPage;
