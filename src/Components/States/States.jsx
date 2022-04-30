import { Carousel } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./States.scss";

import states from "../../Data/StatesData.json";

function States() {
    return (
        <Carousel className="carousal-slider" id="states-carousel" fade>
            {
                states.zones.map((items, i) => {
                    return (
                        <Carousel.Item interval={4000} key={i}>
                            <div>

                                <h3 className="sub-title">{items.name}</h3>

                                <br></br>
                                <div className="container-fluid">
                                    <div className="row this-row">
                                        {
                                            items.areas.map((inStates, j) => {
                                                return (
                                                    <div className="col col-lg-2 hover06 column" key={j}>
                                                        <div className="item">
                                                            <figure><img alt="" src={inStates.src} /></figure>
                                                            <span>{inStates.name}</span>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>

                                <div style={{ height: '35px' }}></div>
                            </div>
                        </Carousel.Item>
                    );
                })
            }
        </Carousel>
    );
}

export default States;