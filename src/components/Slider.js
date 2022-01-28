import React from "react";
import { Carousel } from "react-bootstrap";
import "./../assets/css/slider.css";


const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
        



          <img className="d-block w-100" src="https://i.ibb.co/xJdWDRp/3.jpg" alt="Slider Img" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src="https://i.ibb.co/WGkVSV5/2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src="https://i.ibb.co/z8BGRCY/1.jpg" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src="https://i.ibb.co/XJrp5dy/4.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
