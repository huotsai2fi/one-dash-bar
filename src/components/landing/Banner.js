import React from 'react';

import classes from './Banner.module.scss';
import Container from 'react-bootstrap/Container';

const Banner = (props) => {
  return (
    <Container fluid className={classes.banner}>
      {props.children}
    </Container>
  );
};

export default Banner;
