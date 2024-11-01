import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "react-bootstrap/Carousel";
import slide01 from "./img/ICliqq-01.png";
import slide02 from "./img/ICliqq-01.png";
import slide03 from "./img/ICliqq-01.png";
import "./swiper.css";

function Swiper() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={slide01} alt="first-slide" className="carousel" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide02} alt="first-slide" className="carousel" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide03} alt="first-slide" className="carousel" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Swiper;
