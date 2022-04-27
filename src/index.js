import React from 'react';
import ReactDOM from 'react-dom/client';

//components imports
import BootCarousal from './Components/CarousalSlider/BootCarousal';
import NavHeader from './Components/Header/Header';
import VideoPlayer from './Components/VideoPlayer/Player';
import Divider from './Components/Divider/Divider';
import TopPlaces from './Components/TopPlaces/TopPlaces';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='complete-body'>

    {/* header nav */}
    <NavHeader />
    <div className='hr-line'/>
    
    {/* intro video - autoplay video */}
    <VideoPlayer />
    
    {/* popular in india - carousal  */}
    <div className='hr-line'/>
    <Divider />
    <h1 className='h1-headings'>Popular in India</h1>
    <Divider />
    
    <div className='hr-line'/>
    <BootCarousal />

    {/* top places to visit - 2 rows of carousal */}
    <div className='hr-line'/>
    <Divider />
    <h1 className='h1-headings'>Top Places to Visit</h1>
    <Divider />

    {/* top places to visit */}
    <div className='hr-line'/>
    <TopPlaces />
    
  </div>
);

//header nav
//intro video -> autoplay video
//popular in india -> carousal  
//top places to visit
//states -> hover to see capitals (grid view)