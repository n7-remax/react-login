import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png";

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <div className="slider-container">
        <Slider {...(settings as any)}>
          <div className="slider-item">
            <div className="slider-img">
            <img src={slide1} alt="slide" />
            </div>
            <div className="slider-text">
              <h2>Tokenplace</h2>
              <p>Multi-exchange Trading Terminal</p>
            </div>
          </div>
          <div className="slider-item">
          <div className="slider-img">
            <img src={slide2} alt="slide" />
            </div>
            <div className="slider-text">
              <h2>Fund Platform</h2>
              <p>Hedge funds wealth management</p>
            </div>
          </div>
          <div className="slider-item">
          <div className="slider-img">
            <img src={slide3} alt="slide" />
            </div>
            <div className="slider-text">
              <h2>Noviscient</h2>
              <p>Management Platform</p>
            </div>
          </div>
          <div className="slider-item">
          <div className="slider-img">
            <img src={slide4} alt="slide" />
            </div>
            <div className="slider-text">
              <h2>Merge Data Review</h2>
              <p>
                It gives data managers the power to efficiently manage quality
                data to ensure database lock readiness.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CustomSlider;
