import React from 'react';
import styled from 'styled-components';

import classes from './EventItem.module.scss';

const Image = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 59.37%,
      #351a03 98.44%
    ),
    url(${(props) => props.img});
`;

const EventItem = (props) => {
  return (
    <div className={classes.wrapper}>
      <Image img={props.img} className={classes.image}></Image>
      <h2 className="ff-girassol mb-3">{props.title}</h2>
      <span className="ff-girassol">{props.schedule}</span>
      <span className="fw-medium fs-5">{props.description}</span>
    </div>
  );
};

export default EventItem;
