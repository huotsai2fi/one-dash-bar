import React from 'react';
import { Fade } from 'react-awesome-reveal';

import classes from './SectionTitle.module.scss';

const SectionTitle = (props) => {
  return (
    <Fade direction="up">
      <div className={classes['section-title']}>
        <div className={classes['section-title__text']}>
          <span className={`fw-medium ${classes['section-title__text--zh']}`}>
            {props.zh}
          </span>
          <span className={`ff-girassol ${classes['section-title__text--en']}`}>
            {props.en}
          </span>
        </div>
      </div>
    </Fade>
  );
};

export default SectionTitle;
