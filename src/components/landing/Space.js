import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import SpaceItem from './SpaceItem';
import CarouselModal from './CarouselModal';

import classes from './Space.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

import Space1Img from '../../images/Space1.png';
import Space2Img from '../../images/Space2.png';
import Space3Img from '../../images/Space3.png';
import Space4Img from '../../images/Space4.png';

const spaces = [
  {
    id: 1,
    titleZh: '主吧台',
    titleEn: 'Main Bar',
    img: Space1Img,
  },
  {
    id: 2,
    titleZh: '展示酒櫃',
    titleEn: 'Wine Cabinet',
    img: Space2Img,
  },
  {
    id: 3,
    titleZh: '包廂',
    titleEn: 'Private Room',
    img: Space3Img,
  },
  {
    id: 4,
    titleZh: '舞台',
    titleEn: 'Stage',
    img: Space4Img,
  },
];

const Space = () => {
  const [carouselStartId, setCarouselStartId] = useState(null);

  const onOpenCarouselHandler = (id) => {
    setCarouselStartId(id);
  };

  const onCloseCarouselHandler = () => {
    setCarouselStartId(null);
  };

  return (
    <>
      {carouselStartId && (
        <CarouselModal
          startId={carouselStartId}
          onClose={onCloseCarouselHandler}
          items={spaces}
        />
      )}
      <section id="space" className={classes.space}>
        <SectionTitle zh={'空間'} en={'Space'} />
        <Container className={classes.space__content}>
          <Row className="gy-4">
            {spaces.map((spaceDetail) => (
              <Col key={spaceDetail.id} md="6">
                <SpaceItem {...spaceDetail} onClick={onOpenCarouselHandler} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Space;
