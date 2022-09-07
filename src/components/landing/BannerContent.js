import React from 'react';
import ButtonLink from './ButtonLink';
import { Fade } from 'react-awesome-reveal';

import classes from './BannerContent.module.scss';

const Banner = () => {
  return (
    <div className={classes.banner__content}>
      <Fade direction="down" duration={1500}>
        <h1 className="ff-girassol">One Dash Bar</h1>
        <ButtonLink text="線上點單" to="#" />
        <ButtonLink text="線上訂位" to="#" />
      </Fade>
    </div>
  );
};

export default Banner;
