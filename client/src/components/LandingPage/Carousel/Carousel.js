import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useStyles from "./Styles";

export const Carousel = ({ imageLinks }) => {
  const classes = useStyles();
  var images = [{}];

  if (imageLinks !== undefined) {
    images = [
      { img: imageLinks.google },
      { img: imageLinks.onePlus },
      { img: imageLinks.iphone },
      { img: imageLinks.huawei },
      { img: imageLinks.samsung },
      { img: imageLinks.xiaomi },
    ];
  }

  var imgSlides = () =>
    images.map((link) => (
      <div className={classes.position} key="to avoid warning useless af">
        <img className={classes.dimesions} src={link.img} alt="Phone Images" />
      </div>
    ));
  return (
    <div>
      <Slider
        dots={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        arrows={false}
        autoplaySpeed={3000}
        className={classes.slickSlider}
      >
        {imgSlides()}
      </Slider>
    </div>
  );
};
