import'bootstrap/dist/css/bootstrap.min.css';

import Carousel  from 'react-bootstrap/Carousel';

import Carousel1 from '../../media/carouselImages/carousel-1.jpg';
import Carousel2 from '../../media/carouselImages/carousel-2.jpg';
import Carousel3 from '../../media/carouselImages/carousel-3.jpg';





const Slideshow = () => {
    return (
        <> 
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Carousel1}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={Carousel2}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Carousel3}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel> 
        </>
    )
}

export default Slideshow


