import React from 'react';
import ButtonLink from './ButtonLink';

import classes from './BannerContent.module.scss';

const Banner = () => {
  return (
    <div className={classes.banner__content}>
      <h1 className="ff-girassol">One Dash Bar</h1>
      <ButtonLink text="線上點單" to="#" />
      <ButtonLink text="線上訂位" to="#" />
    </div>
  );
};

export default Banner;
