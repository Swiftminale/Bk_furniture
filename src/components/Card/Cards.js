import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "react-bootstrap";

import Img1 from "../Hero/CarouselImg/img5.jpg";
import Img0 from "../Hero/CarouselImg/img8.jpg";
import Img2 from "../Hero/CarouselImg/img2.jpg";
import Img3 from "../Hero/CarouselImg/img19.jpg";
import "./Cards.css";

function Cards() {
  return (
    <div className="Cards">
      <Card>
        <CardImg variant="top" src={Img0} />
        <CardBody>
          <CardTitle>Card Logo</CardTitle>
          <CardText>test</CardText>
          <Button variant="primary">Go</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg variant="top" src={Img1} />
        <CardBody>
          <CardTitle>Card Logo</CardTitle>
          <CardText>test</CardText>
          <Button variant="primary">Go</Button>
        </CardBody>
      </Card>{" "}
      <Card>
        <CardImg variant="top" src={Img2} />
        <CardBody>
          <CardTitle>Card Logo</CardTitle>
          <CardText>test</CardText>
          <Button variant="primary">Go</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg variant="top" src={Img3} />
        <CardBody>
          <CardTitle>Card Logo</CardTitle>
          <CardText>test</CardText>
          <Button variant="primary">Go</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Cards;
