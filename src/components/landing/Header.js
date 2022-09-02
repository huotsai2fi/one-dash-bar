import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.scss';
import Container from 'react-bootstrap/Container';

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenuHandler = () => {
    setShowMenu(true);
  };

  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  let headerClass = showMenu
    ? `${classes.header} ${classes.active}`
    : classes.header;

  let menuClass =
    showMenu && props.isMobileSize
      ? `${classes.header__menu} ${classes.active}`
      : classes.header__menu;

  return (
    <Container fluid="md" className={`fixed-top ${headerClass}`}>
      <div className={classes.header__collapse}>
        <button onClick={openMenuHandler}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <button onClick={closeMenuHandler} className={!showMenu && 'd-none'}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <ul className={`list-unstyled ${menuClass}`}>
        <li>
          <Link to="#about">
            <span className="fw-medium pe-1">關於</span>
            <span className="ff-girassol">About</span>
          </Link>
        </li>
        <li>
          <Link to="#event">
            <span className="fw-medium pe-1">活動</span>
            <span className="ff-girassol">Events</span>
          </Link>
        </li>
        <li>
          <Link to="#space">
            <span className="fw-medium pe-1">空間</span>
            <span className="ff-girassol">Space</span>
          </Link>
        </li>
        <li>
          <Link to="#open-time">
            <span className="fw-medium pe-1">營業時間</span>
            <span className="ff-girassol">Open Time</span>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
