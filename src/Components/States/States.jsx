import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./States.scss";

import states from "../../Data/StatesData.json";

function States() {
    return (
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

            <br></br>
            <br></br>
            <h3 className="sub-title">Middle India</h3>

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

            <br></br>
            <br></br>
            <h3 className="sub-title">South India</h3>

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
    );
}

export default States;

/*
    <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2 circle" key={i}>
        <img src={items.src} alt=""/>
        <h4>{items.name}</h4>
    </div>
*/