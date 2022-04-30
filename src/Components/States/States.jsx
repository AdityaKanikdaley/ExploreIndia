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
                                {/* <hr id="sub-hr"></hr> */}

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

                                <div style={{ height: '90px' }}></div>
                            </div>
                        </Carousel.Item>
                    );
                })
            }
        </Carousel>
    );
}

export default States;

/*
        <div>
            <h3 className="sub-title">North India</h3>

            <div className="container-fluid">
                <div className="row this-row">
                    {
                        states.north.map((items, i) => {
                            return (
                                <div className="col col-lg-2 hover06 column" key={i}>
                                    <div className="item">
                                        <figure><img alt="" src={items.src} /></figure>
                                        <span>{items.name}</span>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>

*/
/*
    <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2 circle" key={i}>
        <img src={items.src} alt=""/>
        <h4>{items.name}</h4>
    </div>
*/