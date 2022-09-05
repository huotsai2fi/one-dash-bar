import React from 'react';
import Header from '../components/landing/Header';
import Banner from '../components/landing/Banner';
import BannerContent from '../components/landing/BannerContent';
import About from '../components/landing/About';
import Event from '../components/landing/Event';
import Space from '../components/landing/Space';
import OpenTime from '../components/landing/OpenTime';
import Footer from '../components/landing/Footer';
import { useIsMobileSize } from '../hooks/useIsMobileSize';

import Container from 'react-bootstrap/Container';

const Landing = () => {
  const isMobileSize = useIsMobileSize();

  return (
    <>
      <Header isMobileSize={isMobileSize} />
      <Banner>{!isMobileSize && <BannerContent />}</Banner>
      <Container fluid className="bgc-dark">
        {isMobileSize && <BannerContent />}
        <About id="about" />
        <Event isMobileSize={isMobileSize} />
      </Container>
      <Container fluid className="bgc-gray">
        <Space />
      </Container>
      <Container fluid className="bgc-dark">
        <OpenTime />
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
