import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useStyles from "./Styles";

export const AppleCarousel = ({ imageLinks }) => {
  const classes = useStyles();
  var images = [
    {
      img:
        "https://i.pinimg.com/originals/8a/af/59/8aaf59baca457c61ea8526ea047bdcb6.jpg",
    },
    {
      img:
        "https://i.pinimg.com/originals/5a/86/e3/5a86e3c4c25619838d3b5c70932a1988.jpg",
    },
    {
      img:
        "https://i.pinimg.com/originals/1f/4e/ea/1f4eeaf756778f2a00fcc7be3465f6c9.jpg",
    },
  ];

  //   if (imageLinks !== undefined) {
  //     images = [
  //       { img: imageLinks.google },
  //       { img: imageLinks.onePlus },
  //       { img: imageLinks.iphone },
  //       { img: imageLinks.huawei },
  //       { img: imageLinks.samsung },
  //       { img: imageLinks.xiaomi },
  //     ];
  //   }

  var imgSlides = () =>
    images.map((link) => (
      <div key="to avoid warning useless af">
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
