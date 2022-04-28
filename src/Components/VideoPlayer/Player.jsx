import React from "react";
import Video from "./Video.mp4";
import Divider from "../Divider/Divider";

import './Player.scss';

function VideoPlayer() {
    return (
        <div className="videoPlayer">
            <Divider />
            <h1 className='welcome' id="home">Start Exploring India</h1>
            <Divider />
            <br></br>
            <br></br>
            <video nocontrols="true" autoPlay loop muted>
                <source src={Video} type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoPlayer;