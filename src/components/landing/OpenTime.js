import React from 'react';
import SectionTitle from './SectionTitle';

import classes from './OpenTime.module.scss';
import Container from 'react-bootstrap/Container';

const OpenTime = () => {
  return (
    <section id="open-time" className={classes['open-time']}>
      <SectionTitle zh={'營業時間'} en={'Open Time'} />
      <Container
        className={`fw-medium ff-plus-jakarta-sans ${classes['open-time__content']}`}
      >
        <div>
          <p className={classes['font-bigger']}>週一至週日</p>
          <p className={`mb-2 mb-md-3 ${classes['font-normal']}`}>Mon - Sun</p>
          <p className={classes['font-bigger']}>18:00 ~ 03:00</p>
        </div>
        <div>
          <p className={classes['font-bigger']}>2/14定期休業</p>
          <p className={classes['font-normal']}>Closed on Feb. 14</p>
        </div>
      </Container>
    </section>
  );
};

export default OpenTime;
