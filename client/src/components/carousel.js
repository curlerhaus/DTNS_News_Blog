import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

function CarouselFadeExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="slider-container" src="/tech.jpg" alt="First slide" />
        <Carousel.Caption className="caption">
          <div className="captiontext">
            <h3>Here is a generic story about technology</h3>
            <p>Look at this fun caption</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="slider-container" src="/robot.jpg" alt="Second slide" />

        <Carousel.Caption className="caption">
          <div className="captiontext">
            <h3>Space Robots!</h3>
            <p>Will they murder us all? Who knows?</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider-container"
          src="football.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="caption">
          <div className="captiontext">
            <h3>Sports ball match!</h3>
            <p>
              Have you seen the people getting hurt on the sports ball field?
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
