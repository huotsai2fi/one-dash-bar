import React from 'react';
import styled from 'styled-components';

import classes from './EventItem.module.scss';

const Image = styled.div`
  background-image: url(${(props) => props.img});
`;

const EventItem = (props) => {
  return (
    <div className={classes.wrapper}>
      <Image img={props.img} className={classes.image}></Image>
      <h2 className="ff-girassol mb-3">{props.title}</h2>
      <span className="ff-girassol">{props.schedule}</span>
      <span className="fw-medium fz-20">{props.description}</span>
    </div>
  );
};

export default EventItem;
