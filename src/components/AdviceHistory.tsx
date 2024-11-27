// import React from "react";
import Slider from "react-slick";
import useAdviceStore from "../store/stateStore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AdviceHistory() {
  const { adviceHistory } = useAdviceStore();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Advice History</h2>
      <Slider {...settings}>
        {adviceHistory.map((advice, index) => (
          <div key={index}>
            <h3>{advice}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default AdviceHistory;
