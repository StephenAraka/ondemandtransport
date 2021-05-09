import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CheckboxUnchecked } from '../../assets/images/checkbox-unchecked.svg';
import { ReactComponent as CircleArrow } from '../../assets/images/right-arrow-circle.svg';
import './LinksGroup.css';

const LinksGroup = ({ links }) => {
  return (
    <div className="LinksGroup">
      {links.length > 0 && (
        <>
          {links.map((item, index) => (
            <Link to={`${item.link}`} key={index} >
              <div className="Task">
                <div className="CheckBoxAndLabel">
                  {item.icon === undefined ? <CheckboxUnchecked className="Icon" /> : item.icon}
                  <div className="Label">
                    {item.label}
                  </div>
                </div>
                <CircleArrow className="Icon" />
              </div>
            </Link>
          ))}
          </>
      )}
      </div>
  );
};

export default LinksGroup;
