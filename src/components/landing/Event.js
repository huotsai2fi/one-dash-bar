import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import EventItem from './EventItem';

import classes from './Event.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

import Event1Img from '../../images/Event1.png';
import Event2Img from '../../images/Event2.png';
import Event3Img from '../../images/Event3.png';
import Event4Img from '../../images/Event4.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

const events = [
  {
    id: 1,
    title: 'Jazz Night',
    schedule: 'Jul.27 20:20-22:00',
    description: '爵士樂live表演',
    img: Event1Img,
  },
  {
    id: 2,
    title: 'July Sad Hour',
    schedule: 'Every Mon. 23:00-24:00',
    description: '經典調酒買一送一',
    img: Event2Img,
  },
  {
    id: 3,
    title: 'Your story, Our wine',
    schedule: 'Every day and limited',
    description: '分享你的故事，全品項半價',
    img: Event3Img,
  },
  {
    id: 4,
    title: 'Hustle Party',
    schedule: 'Aug.5 20:20-23:00',
    description: '來體驗雙人份的快樂吧',
    img: Event4Img,
  },
];

const Event = (props) => {
  const [showMoreEvents, setShowMoreEvents] = useState(false);

  const showMoreHandler = () => {
    setShowMoreEvents(true);
  };

  let renderEvents;
  if (!showMoreEvents) {
    renderEvents = events.slice(0, 3);
  } else {
    renderEvents = events;
  }

  return (
    <section id="event" className={classes.event}>
      <SectionTitle zh={'活動'} en={'Event'} />
      <Container className={classes.event__content}>
        {props.isMobileSize && (
          <>
            <Row className="gy-4">
              {renderEvents.map((eventDetail) => (
                <Col key={eventDetail.id} md>
                  <EventItem {...eventDetail} />
                </Col>
              ))}
            </Row>
            {!showMoreEvents && (
              <button
                onClick={showMoreHandler}
                className={`fw-medium ${classes.more__btn}`}
              >
                更多活動
                <span
                  className={`material-symbols-outlined ${classes['more__btn--icon']}`}
                >
                  change_history
                </span>
              </button>
            )}
          </>
        )}
        {!props.isMobileSize && (
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            navigation={{
              prevEl: '.slidePrev-btn',
              nextEl: '.slideNext-btn',
              disabledClass: classes['swipper__btn--disabled'],
            }}
            modules={[Navigation]}
          >
            {events.map((eventDetail) => (
              <SwiperSlide key={eventDetail.id}>
                <EventItem {...eventDetail} />
              </SwiperSlide>
            ))}
            <div className={classes['swipper__btn']}>
              <button className="slidePrev-btn">
                <span
                  className={`material-symbols-outlined ${classes['swipper__btn--prev']}`}
                >
                  change_history
                </span>
              </button>
              <button className="slideNext-btn">
                <span
                  className={`material-symbols-outlined ${classes['swipper__btn--next']}`}
                >
                  change_history
                </span>
              </button>
            </div>
          </Swiper>
        )}
      </Container>
    </section>
  );
};

export default Event;
