import { Card, Carousel, Button } from 'react-bootstrap'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./TopPlaces.scss";

import topPlaces from "../../Data/TopPlacesData.json"

function TopPlaces() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                    <Carousel className='carousal-slider-topPic carousel-fade'>
                        {
                            topPlaces.parks.map((items, i) => {
                                return (
                                    <Carousel.Item key={i} interval={3500}>
                                        <Card>
                                            <Card.Img variant="top" src={items.src} />
                                            <Card.Body>
                                                <Card.Title>{items.title}</Card.Title>
                                                <Card.Text>{items.context}</Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                );
                            })
                        }
                    </Carousel>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                    <Carousel className='carousal-slider-topPic carousel-fade'>
                        {
                            topPlaces.forts.map((items, i) => {
                                return (
                                    <Carousel.Item key={i} interval={3500}>
                                        <Card>
                                            <Card.Img variant="top" src={items.src} />
                                            <Card.Body>
                                                <Card.Title>{items.title}</Card.Title>
                                                <Card.Text>{items.context}</Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                );
                            })
                        }
                    </Carousel>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                    <Carousel className='carousal-slider-topPic carousel-fade'>
                        {
                            topPlaces.parks.map((items, i) => {
                                return (
                                    <Carousel.Item key={i} interval={3500}>
                                        <Card>
                                            <Card.Img variant="top" src={items.src} />
                                            <Card.Body>
                                                <Card.Title>{items.title}</Card.Title>
                                                <Card.Text>{items.context}</Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                );
                            })
                        }
                    </Carousel>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                    <Carousel className='carousal-slider-topPic carousel-fade'>
                        {
                            topPlaces.forts.map((items, i) => {
                                return (
                                    <Carousel.Item key={i} interval={3500}>
                                        <Card>
                                            <Card.Img variant="top" src={items.src} />
                                            <Card.Body>
                                                <Card.Title>{items.title}</Card.Title>
                                                <Card.Text>{items.context}</Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                );
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default TopPlaces;

/*
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
*/