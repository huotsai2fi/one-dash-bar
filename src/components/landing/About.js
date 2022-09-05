import React from 'react';
import SectionTitle from './SectionTitle';

import classes from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={classes.about}>
      <SectionTitle zh={'關於'} en={'About'} />
      <div className={classes.about__content}>
        <p className="fw-medium mb-3 mb-md-4">
          一顆破碎的心加上3滴苦精，透過舌尖的感官療癒都市人的身心
        </p>
        <p className="ff-great-vibes">
          A broken heart with one dash of bitter, heals the soul of urbanites
          through the senses on the tip of tongue
        </p>
      </div>
    </section>
  );
};

export default About;
