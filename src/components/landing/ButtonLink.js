import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ButtonLink.module.scss';

const ButtonLink = (props) => {
  return (
    <Link className={classes.link} to={props.to}>
      {props.text}
    </Link>
  );
};

export default ButtonLink;
