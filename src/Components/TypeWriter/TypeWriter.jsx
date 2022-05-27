import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import "./TypeWriter.scss";

export default function MainTitle(props) {
   
    const list = [];
    (props.listTitles).forEach(element => {
        list.push(element);
    });
    
    const { text } = useTypewriter({
        words: list,
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