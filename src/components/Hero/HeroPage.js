import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HeroPage.css";
import img0 from "./CarouselImg/img19.jpg";
import img1 from "./CarouselImg/img20.jpg";
import img2 from "./CarouselImg/img1.jpg";
import img3 from "./CarouselImg/img2.jpg";

function HeroPage() {
  return (
    <Carousel className="contaoner">
      <Carousel.Item className="carousel-img">
        <img src={img0} alt="First slide" />
        <Carousel.Caption className="blur-background">
          <h3>Comfort Meets Style</h3>
          <p>“Transform Your Space with Our Luxurious Sofas and Couches.”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img">
        <img src={img1} alt="Second slide" />
        <Carousel.Caption className="blur-background">
          <h3>Lounge in Luxury</h3>
          <p>
            “Experience Unmatched Comfort with Our Premium Sofas and Couches.”
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img">
        <img src={img2} alt="Third slide" />
        <Carousel.Caption className="blur-background">
          <h3>Where Elegance Sits</h3>
          <p>“Elevate Your Living Area with Our Stylish Sofas and Couches.”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-img">
        <img src={img3} alt="Fourth slide" />
        <Carousel.Caption className="blur-background">
          <h3>Your Perfect Seating Awaits</h3>
          <p>“Find Your Ideal Sofa or Couch for Every Moment of Relaxation.”</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroPage;
