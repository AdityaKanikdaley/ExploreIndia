import React from "react";
import Video from "./Video.mp4";

import './Player.scss';

function VideoPlayer() {
    return (
        <div className="videoPlayer">
            <video nocontrols="true" autoPlay loop muted>
                <source src={Video} type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoPlayer;