import React from 'react';

import classes from './SectionTitle.module.scss';

const SectionTitle = (props) => {
  return (
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
  );
};

export default SectionTitle;
