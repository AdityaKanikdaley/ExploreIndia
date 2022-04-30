import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./TopPlaces.scss";

import topPlaces from "../../Data/TopPlacesData.json"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function TopPlaces() {
    return (

        <div>

            <br></br>
            <br></br>

            <div id="title-container">
                <div id="sub-title-left"></div>
                <h3 id="sub-title-center">Parks</h3>
                <div id="sub-title-right"></div>
            </div>

            <Carousel
                ssr={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                itemClass="slider-image-item"
                responsive={responsive}
                shouldResetAutoplay={true}
                containerClass="carousel-container-with-scrollbar" >

                {
                    topPlaces.parks.map((items, i) => {
                        return (
                            <div className="card" style={{ width: '100%' }} key={i}>
                                <img className="card-img-top" src={items.src} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{items.title}</h5>
                                    <p className="card-text">{items.context}</p>
                                    <a href={items.buttonLink} target='_blank' rel="noreferrer" className="btn btn-secondary">Visit this Card</a>
                                </div>
                            </div>
                        );
                    })
                }

            </Carousel>

            <br></br>
            <br></br>

            <div id="title-container">
                <div id="sub-title-left"></div>
                <h3 id="sub-title-center">Forts</h3>
                <div id="sub-title-right"></div>
            </div>

            <Carousel
                ssr={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                itemClass="slider-image-item"
                responsive={responsive}
                shouldResetAutoplay={true}
                containerClass="carousel-container-with-scrollbar" >

                {
                    topPlaces.forts.map((items, i) => {
                        return (
                            <div className="card" style={{ width: '100%' }} key={i}>
                                <img className="card-img-top" src={items.src} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{items.title}</h5>
                                    <p className="card-text">{items.context}</p>
                                    <a href={items.buttonLink} target='_blank' rel="noreferrer" className="btn btn-secondary">Visit this Card</a>
                                </div>
                            </div>
                        );
                    })
                }

            </Carousel>
        </div>

    );
}

export default TopPlaces;