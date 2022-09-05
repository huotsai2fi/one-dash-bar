import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLink from './ButtonLink';

import classes from './Footer.module.scss';
import Container from 'react-bootstrap/Container';

import { ReactComponent as FacebookIcon } from '../../images/facebook-f.svg';
import { ReactComponent as InstagramIcon } from '../../images/instagram.svg';

const Footer = () => {
  return (
    <Container fluid className={classes.footer}>
      <div className={classes.footer__content}>
        <p className={`ff-girassol ${classes.title}`}>One Dash Bar</p>
        <ul className={`list-unstyled ${classes.info}`}>
          <li>台北市信義區仁愛路四段505號</li>
          <li>+886 2-2991-1234</li>
          <li>service@onedashbar.com</li>
        </ul>
        <div className={`d-flex justify-content-center gap-4 ${classes.icons}`}>
          <Link to="#">
            <FacebookIcon className={classes.icon} />
          </Link>
          <Link to="#">
            <InstagramIcon className={classes.icon} />
          </Link>
        </div>
        <div
          className={`d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 ${classes.links}`}
        >
          <ButtonLink text="線上點單" to="#" />
          <ButtonLink text="線上訂位" to="#" />
        </div>
        <small>©2022 One Dash Bar. All Rights Reserved</small>
      </div>
    </Container>
  );
};

export default Footer;
