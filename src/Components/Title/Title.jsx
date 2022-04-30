import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import "./Title.scss";

export default function Title(props) {

    const { text } = useTypewriter({
        words: [`${props.title}`],
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