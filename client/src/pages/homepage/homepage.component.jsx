import React from 'react';
import Header from '../../components/header/header.component';
import Pills from '../../components/pills/pills.component';
import Media from '../../components/media/media.component';
import Features from '../../components/features/features.component';
import Directory from '../../components/directory/directory.component';
import Testimonials from '../../components/testimonials/testimonials.component';
import PriceTables from '../../components/price-tables/price-tables.component';
import Partners from '../../components/partners/partners.component';
import Subscription from '../../components/subscription/subscription.component';
import './homepage.styles.scss';
import Slide from 'react-reveal/Slide';

const HomePage = () => (
  <div className='homepage'>
    <Header />
    <Pills />
    <Slide top>
    <Media />
    </Slide>
    <Directory />
    <Slide bottom>
    <Features />
    </Slide>
    <Slide bottom>
    <PriceTables/>
    </Slide>
    <Testimonials />
    <Slide top>
    <Partners/>
    </Slide>
    <Subscription/>
  </div>
);

export default HomePage;
