import { React, useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import { fadeIn } from 'react-animations'
import styled, { keyframes } from 'styled-components';

import Video from "./Video.mp4";

import './Player.scss';

const FadeIn = styled.div`animation: 4s ${keyframes`${fadeIn}`}`;

function VideoPlayer() {

    const [done, setDone] = useState(undefined);
    useEffect(() => {
        setTimeout(() => {
            setDone(true);
        }, 2500);
    }, []);

    return (
        <div className="videoPlayer">
            {
                !done ? (
                    <div id="loader">
                        <ReactLoading
                            type={"bubbles"}
                            color={"#E8E8E8"}
                            height={50}
                            width={100}
                        />
                    </div>
                ) :
                    (
                        <FadeIn>
                            <video nocontrols="true" autoPlay loop muted>
                                <source src={Video} type="video/mp4" />
                            </video>
                        </FadeIn>
                    )
            }

        </div>
    );
}

export default VideoPlayer;