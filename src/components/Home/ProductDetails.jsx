"use client";
import parse from "html-react-parser";
import React, { useState } from "react";

const ProductDetails = (props) => {
  const [showMore, setShowMore] = useState(false);
  const [activeImage, setActiveImage] = useState(props.details["img1"]);
  const [fixedImage, setFixedImage] = useState(props.details["img1"]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const descriptionContent = parse(`${props.details["des"]}`);

  const handleImageClick = (image) => {
    setActiveImage(image);
    setFixedImage(image);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 my-5">
            <div>
              <img
                className="fixedImage w-100 mb-4 rounded"
                src={fixedImage}
                alt="Fixed Image"
              />
            </div>

            <div className="d-flex flex-wrap gap-3">
              {props.details.img1 && (
                <img
                  className={`slideHigh w-25 ${
                    activeImage === props.details.img1 ? "active" : ""
                  }`}
                  src={props.details.img1}
                  alt="Image 1"
                  onClick={() => handleImageClick(props.details.img1)}
                />
              )}

              {props.details.img2 && (
                <img
                  className={`slideHigh w-25 ${
                    activeImage === props.details.img2 ? "active" : ""
                  }`}
                  src={props.details.img2}
                  alt="Image 2"
                  onClick={() => handleImageClick(props.details.img2)}
                />
              )}

              {props.details.img3 && (
                <img
                  className={`slideHigh w-25 ${
                    activeImage === props.details.img3 ? "active" : ""
                  }`}
                  src={props.details.img3}
                  alt="Image 3"
                  onClick={() => handleImageClick(props.details.img3)}
                />
              )}
            </div>

            <h4 className="my-4 fw-bold">{props.details["title"]}</h4>

            <div className="my-4">
              <h6>Brands: {props.details["brands"]} </h6>
              <h6>Conditions: {props.details["conditions"]} </h6>
              <h6>Typed: {props.details["type"]} </h6>
            </div>

            <div>
              <b className="mb-4">Description:-</b> <br />
              {showMore ? descriptionContent : descriptionContent.slice(0, 100)}
              <p
                className="btn-link text-decoration-none text-uppercase fw-bold mt-3 hide-show"
                onClick={toggleShowMore}
              >
                {showMore ? (
                  <>
                    Show Less <i class="bi bi-caret-down-fill"></i>
                  </>
                ) : (
                  <>
                    Show More <i class="bi bi-caret-up-fill"></i>
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-5 my-5">
            <div className="d-flex align-items-center gap-3 border p-2">
              <i className="bi bi-telephone-fill tele-icon"></i>
              <span>
                <div className="tele-txt">
                  <h6 className="fw-bold">01937xxxxx</h6>
                  <p>Click to show phone number</p>
                </div>
              </span>
            </div>

            <div className="d-flex align-items-center gap-3 border p-2">
              <i className="bi bi-wechat tele-icon"></i>
              <span className="fw-bold">Chat</span>
            </div>

            <div className="border p-2">
              <span className="d-flex align-items-center gap-3">
                <i className="bi bi-shield-fill-check tele-icon"></i>
                <h6 className="fw-bold">Safety tips</h6>
              </span>
              <ul className="text-dark mt-3">
                <li>Meet in a safe & public place</li>
                <li>Don’t pay in advance</li>
              </ul>
            </div>

            <div className="d-flex justify-content-center">
              <img
                className="mt-5"
                src="https://tpc.googlesyndication.com/simgad/17626355364356074147"
                alt="ads"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
