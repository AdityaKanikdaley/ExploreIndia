import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import "./Titles.scss";

export default function MainTitle(props) {

    const { text } = useTypewriter({
        words: [`${props.title1}`, `${props.title2}`],
        loop: 0,
        typeSpeed: 100,
    });

    return (
        <h1 className='h1-headings'>
            <span>
                {text}
                <Cursor cursorStyle="_" />
            </span>
        </h1>
    );
}