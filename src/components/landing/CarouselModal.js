import React from 'react';
import ReactDOM from 'react-dom';
import CarouselFade from './CarouselFade';

import classes from './CarouselModal.module.scss';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const CarouselModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <div className={classes.modal}>
          <CarouselFade items={props.items} startId={props.startId} />
        </div>,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default CarouselModal;
