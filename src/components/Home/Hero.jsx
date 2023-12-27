"use client";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
const Hero = (props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container px-5 section-top">
      <div className="row">
        <div className="p-1 col-12">
          <Carousel
            id="carouselHero"
            activeIndex={index}
            onSelect={handleSelect}
            controls={false}
          >
            {props.slider.map((item, i) => {
              return (
                <Carousel.Item key={i}>
                  <Link
                    href={"/Details/" + item["title"] + "?id=" + item["id"]}
                  >
                    <img
                      className="w-100"
                      src={item["img"]}
                      text="First slide"
                    />
                    <Carousel.Caption className="caption">
                      <Fade>
                        <h4>{item["title"]}</h4>
                        <p>{item["short_des"]}</p>
                      </Fade>
                    </Carousel.Caption>
                  </Link>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
