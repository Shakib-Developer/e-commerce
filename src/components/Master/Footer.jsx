"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ErrorToast, IsEmail, SuccessToast } from "@/utility/FormHelper";
import SubmitButton from "@/components/SubmitButton/SubmitButton";

const Footer = (props) => {
  let [data, setData] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);

  const inputOnChange = (name, value) => {
    setData((data) => ({ ...data, [name]: value }));
  };

  const formSubmit = async () => {
    if (IsEmail(data.email)) {
      ErrorToast("Valid Email Address Required");
    } else {
      setSubmit(true);
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      let res = await fetch("/api/subscribe", options);
      let ResJson = await res.json();
      setSubmit(false);
      setData({ email: "" });
      if (ResJson["status"] === "success") {
        SuccessToast("Request Success");
      } else {
        ErrorToast("Request Fail");
      }
    }
  };

  return (
    <div className="section-footer">
      <div className="pt-5 bg-light text-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6  p-3">
              <h6 className="fw-bold my-3"> ABOUT </h6>
              <p className="fw-bold pe-1">
                Itaque earum rerum hic tenetur sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
              <p>{props.data["socials"][0]["about"]}</p>

              <div className="d-flex justify-content-center justify-content-sm-start">
                <div className="d-flex align-items-center">
                  <a
                    target="_blank"
                    href={props.data["socials"][0]["facebook"]}
                  >
                    <div className="d-flex text-info justify-content-center align-items-center me-2">
                      <i className=" h5 bi bi-facebook"></i>
                    </div>
                  </a>

                  <a target="_blank" href={props.data["socials"][0]["youtube"]}>
                    <div className="d-flex text-info justify-content-center align-items-center">
                      <i className="h5 mx-2 bi bi-youtube"></i>
                    </div>
                  </a>

                  <a target="_blank" href={props.data["socials"][0]["twitter"]}>
                    <div className="d-flex text-info justify-content-center align-items-center">
                      <i className=" h5 mx-2 bi bi-twitter"></i>
                    </div>
                  </a>

                  <a
                    target="_blank"
                    href={props.data["socials"][0]["linkedin"]}
                  >
                    <div className="d-flex text-info justify-content-center align-items-center">
                      <i className=" h5 mx-2 bi bi-linkedin"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 p-3 ps-5">
              <h6 className="fw-bold my-3">RECOMMENDED</h6>
              {props.data["categories"].map((Item, i) => {
                if (i < 8) {
                  return (
                    <Link
                      key={i}
                      className="nav-link my-1"
                      href={"/Products/" + Item["name"] + "?id=" + Item["id"]}
                    >
                      <h6>{Item["name"]}</h6>
                    </Link>
                  );
                }
              })}
            </div>

            <div className="col-md-3 col-sm-6 p-3">
              <h6 className="fw-bold my-3"> LEGAL </h6>
              <ul className="list-unstyled">
                <li className="my-1">
                  <Link href="" className="nav-link">
                    <h6>Privacy Policy</h6>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="" className="nav-link">
                    <h6>Terms & Conditions</h6>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-6 p-3">
              <h6 className="fw-bold my-3"> SUBSCRIBE </h6>

              <input
                value={data.email}
                onChange={(e) => {
                  inputOnChange("email", e.target.value);
                }}
                type="email"
                className="form-control w-100"
                placeholder="Email Address"
              />
              <SubmitButton
                onClick={formSubmit}
                className="btn btn-info text-white mt-2 w-100"
                submit={submit}
                text="Submit"
              />

              <div className="mt-3">
                <p>{props.data["socials"][0]["address"]}</p>
              </div>

              <div className="col-md-8">
                <h6>
                  <i className="bi bi-calendar2-check"></i> Today:
                  <span>
                    {new Date().getDay()}/{new Date().getMonth()}/
                    {new Date().getFullYear()}
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="row border-top py-4">
            <div className="col-md-6 col-12">
              <h6 className="fw-normal pt-1">Copyright © Gorib Technologies</h6>
            </div>

            <div className="col-md-6 col-12">
              <h4 className="text-dark fw-bold text-end text-uppercase">
                <i className="bi bi-reddit"></i> Gorib
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
