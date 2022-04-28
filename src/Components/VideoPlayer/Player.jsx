import React from "react";
import Video from "./Video.mp4";
import Divider from "../Divider/Divider";

import './Player.scss';

function VideoPlayer() {
    return (
        <div className="videoPlayer">

            <Divider />
            <h2 className='welcome' id="home">Start Exploring India</h2>
            <Divider />

            <div style={{ height: '25px' }}></div>

            <video nocontrols="true" autoPlay loop muted>
                <source src={Video} type="video/mp4" />
            </video>

            {/*             
            <div style={{height:'22px'}}></div>

            <div className="hr"></div> */}
        </div>
    );
}

export default VideoPlayer;