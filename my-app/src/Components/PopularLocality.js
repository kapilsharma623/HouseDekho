import React, { Component } from "react";
import Slider from "react-slick";
import Locality from "./Locality.js";

export default class PopularLocality extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      swipe: true
    };
    return (
      <div>
        <Slider {...settings}>
           <Locality/>
           <Locality/>
           <Locality/>
           <Locality/>
           <Locality/>
           <Locality/>
        </Slider>
      </div>
    );
  }
}