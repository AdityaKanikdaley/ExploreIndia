import React from 'react';
import ReactDOM from 'react-dom/client';

//components imports
import BootCarousal from './Components/CarousalSlider/BootCarousal';
import NavHeader from './Components/Header/Header';
import VideoPlayer from './Components/VideoPlayer/Player';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <NavHeader />
    <VideoPlayer />
    <BootCarousal />
  </div>
);

//header nav
//intro video -> autoplay video
//popular in india -> carousal  
//top places to visit
//states -> hover to see capitals (grid view)