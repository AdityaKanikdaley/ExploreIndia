import React from 'react';
import ReactDOM from 'react-dom/client';

//components imports
import Popular from './Components/Popular/Popular';
import NavHeader from './Components/NavHeader/NavHeader';
import VideoPlayer from './Components/VideoPlayer/Player';
import TopPlaces from './Components/TopPlaces/TopPlaces';
import States from './Components/States/States';
import Footer from './Components/Footer/Footer';
import TypeWriter from './Components/TypeWriter/TypeWriter';

import './index.scss';

// refer: https://reactjs.org/docs/strict-mode.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='body'>

    <NavHeader />

    <div className='component-body'>

      <div className='big-hr-line' />
      
      <TypeWriter listTitles={["Welcome !", "Start Exploring India"]}/>

      <div style={{ height: '25px' }} />
      <VideoPlayer />

      <div style={{ height: '80px' }} id='popular-carousal' />
      <TypeWriter listTitles={["Popular in India", "Must Visit"]}/>
      <div style={{ height: '25px' }} />
      <Popular />


      <div style={{ height: '80px' }} id='top-places' />
      <TypeWriter listTitles={["Top Places to Visit"]} />
      <TopPlaces />

      <div style={{ height: '80px' }} id='states-to-visit' />
      <TypeWriter listTitles={["States & UTs to Visit"]} />
      <States />

    </div>

    <div className='big-hr-line' />
    <Footer />

  </div>
);

/*
  -- index --
  header nav
  intro video -> autoplay video
  popular in india -> carousal
  top places to visit
  states and uts -> hover to see names (round view)
  footer
*/