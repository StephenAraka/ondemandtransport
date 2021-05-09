import React from 'react'
import Header from '../Header';
import LinksGroup from '../LinksGroup';
import { ReactComponent as Lock } from '../../assets/images/lock-sec.svg';
import {FaMobile} from "@react-icons/all-files/fa/FaMobile";
import {FaUsers} from "@react-icons/all-files/fa/FaUsers";
import {FaUserFriends} from "@react-icons/all-files/fa/FaUserFriends";
import {FaQuestionCircle} from "@react-icons/all-files/fa/FaQuestionCircle";
import Navbar from '../Navbar';

const ResourcesPage = () => {
  const links=[
    {
      label: "Securing my phone",
      link: "#",
      icon: <FaMobile/>
    },
    {
      label: "Identifying abuse",
      link: "#",
    },
    {
      label: "Find a community",
      link: "#",
      icon: <FaUsers/>
    },
    {
      label: "Support others",
      link: "#",
      icon: <FaUserFriends/>
    },
    {
      label: "Learn more",
      link: "#",
      icon: <FaQuestionCircle/>
    },
  ]

  return (
    <div className="MenuPage Page">
      <Navbar showClose />

      <Header label="Explore privacy resources" icon={<Lock className="Icon" />} />

      <section>
        <LinksGroup
          links={links}
        />
      </section>
    </div>
  )
}

export default ResourcesPage;
