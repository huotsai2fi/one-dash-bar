import React, { useState } from 'react';
import { useScrollTop } from '../../hooks/useScrollTop';

import classes from './Header.module.scss';
import Container from 'react-bootstrap/Container';

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const isScrolled = useScrollTop();

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
    <Container
      fluid
      className={
        `fixed-top` + (!props.isMobileSize && isScrolled ? ` bgc-dark` : ``)
      }
      style={{ height: '111px' }}
    >
      <Container fluid="md" className={`fixed-top ${headerClass}`}>
        <div className={classes.header__collapse}>
          <button onClick={openMenuHandler}>
            <span className="material-symbols-outlined">menu</span>
          </button>
          {showMenu && (
            <button onClick={closeMenuHandler}>
              <span className="material-symbols-outlined">close</span>
            </button>
          )}
        </div>
        <ul className={`list-unstyled ${menuClass}`}>
          <li>
            <a onClick={closeMenuHandler} href="#about">
              <span className="fw-medium pe-1">關於</span>
              <span className="ff-girassol">About</span>
            </a>
          </li>
          <li>
            <a onClick={closeMenuHandler} href="#event">
              <span className="fw-medium pe-1">活動</span>
              <span className="ff-girassol">Event</span>
            </a>
          </li>
          <li>
            <a onClick={closeMenuHandler} href="#space">
              <span className="fw-medium pe-1">空間</span>
              <span className="ff-girassol">Space</span>
            </a>
          </li>
          <li>
            <a onClick={closeMenuHandler} href="#open-time">
              <span className="fw-medium pe-1">營業時間</span>
              <span className="ff-girassol">Open Time</span>
            </a>
          </li>
        </ul>
      </Container>
    </Container>
  );
};

export default Header;
