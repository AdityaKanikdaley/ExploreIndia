import { Carousel } from 'react-bootstrap'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./BootCarousal.scss";

import carousalItems from "../../Data/CarousalData.json"

// refer: https://www.golangprograms.com/display-json-data-in-reactjs.html
function BootCarousal() {
    return (
        <Carousel className='carousal-slider'>
            {
                carousalItems.carousalData.map((items, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <img 
                                className = "d-block image"
                                src={items.src}
                                alt={items.altText}
                            />
                            <Carousel.Caption className='caption'>
                                <h3>{items.caption}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                }) 
            }
        </Carousel>
    );
}

export default BootCarousal;

/*
<Carousel className='carousal-slider'>
            <Carousel.Item>
                <img
                    className="d-block image"
                    src="https://media.cntraveller.in/wp-content/uploads/2018/12/jaipur-haw-mahal-shutterstock_559519123.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className='caption'>
                    <h3>First slide label</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
*/