import React from 'react';
import { Link } from 'react-router-dom';

import classes from './BannerContent.module.scss';

const Banner = () => {
  return (
    <div className={classes.banner__content}>
      <h1 className="ff-girassol fw-regular">One Dash Bar</h1>
      <Link className={classes.banner__link} to="#">
        線上點單
      </Link>
      <Link className={classes.banner__link} to="#">
        線上訂位
      </Link>
    </div>
  );
};

export default Banner;
