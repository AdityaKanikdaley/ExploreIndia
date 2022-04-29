import React from 'react';
import ReactDOM from 'react-dom/client';

//components imports
import BootCarousal from './Components/CarousalSlider/BootCarousal';
import NavHeader from './Components/Header/Header';
import VideoPlayer from './Components/VideoPlayer/Player';
import TopPlaces from './Components/TopPlaces/TopPlaces';
import States from './Components/States/States';
import Footer from './Components/Footer/Footer';
import Title from './Components/Title/Title';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='body'>

    <NavHeader />

    <div className='component-body'>

      <div className='big-hr-line' />

      <Title title="Start Exploring India" />
      <div style={{ height: '25px' }} />
      <VideoPlayer />

      <div style={{ height: '80px' }} id='popular-carousal' />
      <Title title="Popular in India" />
      <div style={{ height: '25px' }} />
      <BootCarousal />


      <div style={{ height: '80px' }} id='top-places' />
      <Title title="Top Places to Visit" />
      <TopPlaces />

      <div style={{ height: '80px' }} id='states-to-visit' />
      <Title title="States to Visit" />
      <States />

    </div>

    <div className='big-hr-line' />
    <Footer />

  </div>
);

//header nav
//intro video -> autoplay video
//popular in india -> carousal
//top places to visit
//states -> hover to see capitals (grid view)
//footer