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
      { img: imageLinks.image1 },
      { img: imageLinks.image2 },
      { img: imageLinks.image3 },
    ];
  }

  var imgSlides = () =>
    images.map((link) => (
      <div key="to avoid warning, useless af">
        <img className={classes.dimensions} src={link.img} alt="Phone Images" />
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
        className={classes.carousel}
      >
        {imgSlides()}
      </Slider>
    </div>
  );
};
