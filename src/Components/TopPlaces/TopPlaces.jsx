import { Carousel } from 'react-bootstrap'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./TopPlaces.scss";

import topPlaces from "../../Data/TopPlacesData.json"

function TopPlaces() {
    return (
        <Carousel className='carousal-slider carousel-fade'>
            {
                topPlaces.topPlaces1.map((items, i) => {
                    return (
                        <Carousel.Item key={i} interval={3000}>
                            <div className="container-fluid">
                                <div className="row">
                                    
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                        <img className="image" alt="" src={items.src} />
                                    </div>

                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                        <p className="context">{items.context}</p>
                                        <a href={items.buttonLink}>Button</a>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    );
                })
            }
        </Carousel>
    )
}

export default TopPlaces;