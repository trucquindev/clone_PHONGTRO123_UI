import React, { memo } from "react";
import Slider from "react-slick";

const SliderCustom = ({ images }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.length > 0 &&
          images?.map((item) => {
            return (
              <div
                key={item}
                className="bg-black flex justify-center h-[300px]"
              >
                <img src={item} className="h-full m-auto object-contain" />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default memo(SliderCustom);
