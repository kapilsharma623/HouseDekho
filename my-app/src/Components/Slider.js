import React, { Component } from "react";
import Slider from "react-slick";
import Item from "./Item.js";

export default class MultipleSlide extends Component {
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
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </Slider>
      </div>
    );
  }
}