import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  dimesions: {
    height: 360,
    width: 640,
  },
  position: {
    marginLeft: 130,
  },
}));

export default function Carousel() {
  const classes = useStyles();
  const huawei = "https://pbs.twimg.com/media/D49BbQLXsAAXAHs.jpg";
  const iphone = "https://i.ytimg.com/vi/ZLyDvABxGF0/maxresdefault.jpg";
  const onePlus = "https://i.ytimg.com/vi/PVWLD3064Ng/maxresdefault.jpg";
  const samsung = "https://i.ytimg.com/vi/ZdC9soHxVC8/maxresdefault.jpg";
  const xiaomi = "https://i.ytimg.com/vi/WpPw7lUXyI0/maxresdefault.jpg";
  const google = "https://i.ytimg.com/vi/NBLO6RpofIU/maxresdefault.jpg";
  var images = [
    { img: google },
    { img: onePlus },
    { img: iphone },
    { img: huawei },
    { img: samsung },
    { img: xiaomi },
  ];
  var imgSlides = () =>
    images.map((num) => (
      <div className={classes.position}>
        <img className={classes.dimesions} src={num.img} alt="Phone Images" />
      </div>
    ));
  return (
    <div className="carousel">
      <Slider
        dots={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        arrows={false}
        autoplaySpeed={3000}
      >
        {imgSlides()}
      </Slider>
    </div>
  );
}
