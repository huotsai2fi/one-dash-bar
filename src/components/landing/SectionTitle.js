import React from 'react';

import classes from './SectionTitle.module.scss';

const SectionTitle = (props) => {
  return (
    <div className={classes['section-title']}>
      <div className={classes['section-title__text']}>
        <span className="fw-medium fz-18">{props.zh}</span>
        <span className="ff-girassol">{props.en}</span>
      </div>
    </div>
  );
};

export default SectionTitle;
