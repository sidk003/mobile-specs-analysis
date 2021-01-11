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
        "https://www.esquireme.com/public/styles/516px_688px_portrait/public/images/2020/08/18/iPhone-12-concept-conceptes-iphone.jpg?itok=C98IKjIf",
    },
    {
      img:
        "https://cdn1.smartprix.com/rx-iU4RI3mhe-w240-h290/apple-iphone-9.jpg",
    },
    {
      img:
        "https://cdn1.smartprix.com/rx-iU4RI3mhe-w240-h290/apple-iphone-9.jpg",
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
      >
        {imgSlides()}
      </Slider>
    </div>
  );
};
