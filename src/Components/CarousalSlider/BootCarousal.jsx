import { Carousel } from 'react-bootstrap'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./BootCarousal.scss";

import carousalItems from "../../Data/CarousalData.json"

function BootCarousal() {
    return (
        <Carousel className='carousal-slider'>
            {
                carousalItems.carousalData.map((items, i) => {
                    return (
                        <Carousel.Item interval={2000} key={i}>
                            <img
                                className="d-block image"
                                src={items.src}
                                alt=""
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