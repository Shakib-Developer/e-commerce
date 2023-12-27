"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fade from "react-awesome-reveal";
import Link from "next/link";

function ProductsSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container-slide my-4">
        <Slider {...settings}>
          {props.products.map((item, i) => (
            <Fade key={i}>
              <div className="main-slide">
                <div className="images">
                  <Link
                    href={"/Details/" + item["title"] + "?id=" + item["id"]}
                  >
                    <img
                      src={item["img1"]}
                      className="top-ads text-center mb-3"
                      alt=""
                      loading="lazy"
                    />
                  </Link>
                </div>

                <div className="slide-text">
                  <h2 className="titles d-block">
                    <Link
                      href={"/Details/" + item["title"] + "?id=" + item["id"]}
                      className="text-decoration-none text-dark"
                    >
                      {item["title"]}
                    </Link>
                  </h2>

                  <div className="prices colors mt-1">
                    <span>${item["price"]}.00</span>
                    <span className="spacer"></span>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default ProductsSlider;
