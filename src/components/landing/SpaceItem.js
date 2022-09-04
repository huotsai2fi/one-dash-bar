import React from 'react';
import styled from 'styled-components';

import classes from './SpaceItem.module.scss';
import Ratio from 'react-bootstrap/Ratio';

const Image = styled.div`
  background-image: url(${(props) => props.img});
`;

const SpaceItem = (props) => {
  return (
    <Ratio
      aspectRatio={2 / 3}
      onClick={() => {
        props.onClick(props.id);
      }}
    >
      <Image img={props.img} className={classes.image}>
        <div className={classes.image__mask}></div>
        <span className="fw-medium fz-20 me-2">{props.titleZh}</span>
        <span className="ff-girassol fz-18">{props.titleEn}</span>
      </Image>
    </Ratio>
  );
};

export default SpaceItem;
