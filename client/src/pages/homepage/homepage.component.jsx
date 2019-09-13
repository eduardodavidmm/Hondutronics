import React from 'react';
import Header from '../../components/header/header.component';
import Pills from '../../components/pills/pills.component';
import Media from '../../components/media/media.component';
import Features from '../../components/features/features.component';
import Testimonials from '../../components/testimonials/testimonials.component';
import PriceTables from '../../components/price-tables/price-tables.component';
import Partners from '../../components/partners/partners.component';
import Subscription from '../../components/subscription/subscription.component';
import './homepage.styles.scss';
import Slide from 'react-reveal/Slide';
import BackToTop from 'react-back-to-top-button';

const HomePage = () => (
  <div className='homepage'>
    <BackToTop showOnScrollUp showAt={5} speed={1000} easing="easeInOutQuint">
    <i class="fas fa-angle-double-up scroll"></i>
    </BackToTop>
    <Header />
    <Pills />
    <Slide bottom>
      <Media />
    </Slide>
    <Slide bottom>
      <Features />
    </Slide>
    <Slide bottom>
      <PriceTables />
    </Slide>
    <Testimonials />
    <Slide bottom>
      <Partners />
    </Slide>
    <Subscription />
  </div>
);

export default HomePage;