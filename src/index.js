import React from 'react';
import ReactDOM from 'react-dom/client';

//components imports
import BootCarousal from './Components/CarousalSlider/BootCarousal';
import NavHeader from './Components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <NavHeader />
    <BootCarousal />
  </div>
);