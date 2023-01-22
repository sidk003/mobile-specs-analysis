import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CircularProgress } from "@material-ui/core";
import useStyles from "./Styles";

export const Carousel = ({ imageLinks, drawerOpen }) => {
  var LeftMarginIpad = drawerOpen ? 15 : 90;
  var LeftMarginHD = !drawerOpen ? 290 : 220;
  var LeftMarginFHD = !drawerOpen ? 300 : 300;

  const classes = useStyles({
    LeftMarginIpad: LeftMarginIpad,
    LeftMarginHD: LeftMarginHD,
    LeftMarginFHD: LeftMarginFHD,
  });
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
      <div key="to avoid warning useless af">
        {link.img ? (
          <img
            className={classes.dimesions}
            src={link.img}
            alt="Phone Images"
          />
        ) : (
          <CircularProgress />
        )}
      </div>
    ));
  return (
    <div className={classes.position}>
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
