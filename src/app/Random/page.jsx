"use client";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const page = (props) => {
  return (
    <div>
      <div className="main-section">
        <div className="row main-container justify-content-start align-items-normal flex-wrap flex-direction-row d-flex">
          <div className="search-row-container">
            <div className="search-row">
              <div className="row justify-content-start align-items-normal flex-wrap flex-direction-row d-flex">
                <div className="col-sm-12 d-flex d-block">
                  <div className="col-sm-6 col-lg-6  d-block">
                    <div>
                      <button className="btn default small gtm-location-selector category-button">
                        <div className="icon medium">
                          <svg className="svg-wrapper" viewBox="0 0 60 60">
                            <path d="M30 10c-8.4 0-15.3 6.7-15.3 15 0 4.7 2.3 10.2 6.8 16.5 3.3 4.5 6.5 7.7 6.6 7.8.5.5 1.1.7 1.8.7s1.3-.2 1.8-.7c.1-.1 3.4-3.3 6.6-7.8 4.5-6.2 6.8-11.8 6.8-16.5.2-8.3-6.7-15-15.1-15zm0 8.8c3.5 0 6.4 2.8 6.4 6.2s-2.9 6.2-6.4 6.2c-3.5 0-6.4-2.8-6.4-6.2s2.9-6.2 6.4-6.2"></path>
                          </svg>
                          Select Location
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6  d-block">
                    <div>
                      <button className="btn default category-button">
                        <div className="icon medium">
                          <svg className="svg-wrapper" viewBox="0 0 60 60">
                            <path d="M47.834 26.901l-2.56-9.803c-.448-1.874-1.41-2.85-3.256-3.307l-9.655-2.599c-1.846-.456-3.134-.124-4.478 1.24L12.007 28.555c-1.343 1.364-1.343 3.596 0 4.96L25.85 47.57a3.427 3.427 0 0 0 4.885 0l15.878-16.122c1.344-1.364 1.67-2.672 1.22-4.547zm-12.62-2.894a3.546 3.546 0 0 1 0-4.96 3.418 3.418 0 0 1 4.885 0 3.545 3.545 0 0 1 0 4.96 3.417 3.417 0 0 1-4.886 0z"></path>
                          </svg>
                          Electronics
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Area Close */}

          <div className="col-sm-12 col-lg-3 filter-pane d-block">
            <div className="filter-container">
              <div className="sort-dropdown-wrapper">
                <div className="dd-wrapper">
                  <label id="dropdown-label-2" className="dd-desktop-label">
                    sort results by
                  </label>
                  <span className="d-inline">
                    <span className="d-down">
                      <button
                        id="dd-button"
                        className="dd-button-wrapper dd-button dd-list-focus"
                        aria-haspopup="listbox"
                        aria-label="Open dropdown"
                        aria-expanded="true"
                      >
                        <span className="dd-button-text">
                          Date: Newest on top
                        </span>
                        <span className="dd-button-icon dd-button-icon-closed">
                          <div className="icon small">
                            <svg
                              className="svg-wrapper"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g fill-rule="evenodd">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                  fill-rule="nonzero"
                                  d="M7.41 8L12 12.58 16.59 8 18 9.41l-6 6-6-6z"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </span>
                      </button>
                    </span>
                  </span>
                </div>
              </div>

              <div className="sort-dropdown-wrapper">
                <div className="dd-wrapper">
                  <label id="dropdown-label-2" className="dd-desktop-label">
                    Type of poster
                  </label>
                  <span className="d-inline">
                    <span className="d-down">
                      <button
                        id="dd-button"
                        className="dd-button-wrapper dd-button dd-list-focus"
                        aria-haspopup="listbox"
                        aria-label="Open dropdown"
                        aria-expanded="true"
                      >
                        <span className="dd-button-text">All</span>
                        <span className="dd-button-icon dd-button-icon-closed">
                          <div className="icon small">
                            <svg
                              className="svg-wrapper"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g fill-rule="evenodd">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                  fill-rule="nonzero"
                                  d="M7.41 8L12 12.58 16.59 8 18 9.41l-6 6-6-6z"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </span>
                      </button>
                    </span>
                  </span>
                </div>
              </div>

              <div className="sort-2-dropdown-wrapper">
                <div className="dd-wrapper">
                  <span className="d-inline">
                    <span className="d-down">
                      <p
                        id="dd-button"
                        className="dd-button-wrapper cat-button dd-list-focus"
                        aria-haspopup="listbox"
                        aria-label="Open dropdown"
                        aria-expanded="true"
                      >
                        <span className="cat-button-text">Category</span>
                        <span className="dd-button-icon dd-button-icon-closed">
                          <div className="icon small">
                            <svg
                              className="svg-wrapper"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g fill-rule="evenodd">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                  fill-rule="nonzero"
                                  d="M7.41 8L12 12.58 16.59 8 18 9.41l-6 6-6-6z"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </span>
                      </p>
                    </span>
                  </span>
                </div>
              </div>

              <div className="sort-2-dropdown-wrapper">
                <div className="dd-wrapper">
                  <span className="d-inline">
                    <span className="d-down">
                      <p
                        id="dd-button"
                        className="dd-button-wrapper cat-button dd-list-focus"
                        aria-haspopup="listbox"
                        aria-label="Open dropdown"
                        aria-expanded="true"
                      >
                        <span className="cat-button-text">Location</span>
                        <span className="dd-button-icon dd-button-icon-closed">
                          <div className="icon small">
                            <svg
                              className="svg-wrapper"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g fill-rule="evenodd">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                  fill-rule="nonzero"
                                  d="M7.41 8L12 12.58 16.59 8 18 9.41l-6 6-6-6z"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </span>
                      </p>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Area Close */}

          <div className="col-sm-12 col-lg-9 d-block">
            <div className="bread-crumb-wrapper" data-testid="serp-breadcrumbs">
              <div className="scrollable-wrapper">
                <div className="scrollable">
                  <ol
                    className="wrapper"
                    data-testid="breadcrumb"
                    itemScope="true"
                    itemType="https://schema.org/BreadcrumbList"
                  >
                    <li
                      itemProp="itemListElement"
                      itemScope="true"
                      itemType="https://schema.org/ListItem"
                    >
                      <div className="wrapper">
                        <div>
                          <a
                            href="/"
                            itemProp="item"
                            className="card-link"
                            title="Gorib - The largest marketplace in Bangladesh!"
                          >
                            <div className="link-text--1" itemProp="name">
                              Home
                            </div>
                          </a>
                        </div>

                        <div data-testid="breadcrumb-separator">
                          <div className="icon extra-small">
                            <svg className="svg-wrapper">
                              <path
                                d="M4 8.295L6.29 6 4 3.705 4.705 3l3 3-3 3z"
                                fill="#707676"
                                fill-rule="nonzero"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      itemProp="itemListElement"
                      itemScope="true"
                      itemType="https://schema.org/ListItem"
                    >
                      <div className="wrapper">
                        <div>
                          <a
                            href="/"
                            itemProp="item"
                            className="card-link"
                            title="Gorib - The largest marketplace in Bangladesh!"
                          >
                            <div className="link-text--1" itemProp="name">
                              All Ads
                            </div>
                          </a>
                        </div>

                        <div data-testid="breadcrumb-separator">
                          <div className="icon extra-small">
                            <svg className="svg-wrapper">
                              <path
                                d="M4 8.295L6.29 6 4 3.705 4.705 3l3 3-3 3z"
                                fill="#707676"
                                fill-rule="nonzero"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      itemProp="itemListElement"
                      itemScope="true"
                      itemType="https://schema.org/ListItem"
                    >
                      <div className="wrapper">
                        <div>
                          <a href="/" itemProp="item" className="card-link">
                            <div className="link-text--1" itemProp="name">
                              Electronics
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Right Top Area Close */}

            <div className="ad-list-container">
              <div>
                <div className="ad-list">
                  <div className="list-wrapper">
                    <div className="spotlight-slot">
                      <ul className="list" data-testid="list">
                        {props.latest.map((item, i) => {
                          return (
                            <Fade key={i}>
                              <li className="top-ads-container gtm-top-ad">
                                <a
                                  href="/"
                                  className="card-link"
                                  data-testid="ad-card-link"
                                >
                                  <div className="container-2">
                                    <div className="image">
                                      <div className="featured-member">
                                        <Link
                                          href={
                                            "/Details/" +
                                            item["title"] +
                                            "?id=" +
                                            item["id"]
                                          }
                                        >
                                          <img
                                            src={item["img"]}
                                            className="top-ad"
                                            alt="Full Computer sale"
                                            loading="lazy"
                                          />
                                        </Link>
                                      </div>
                                    </div>

                                    <div className="contents">
                                      <h2 className="heading title title-adjust d-block">
                                        {item["title"]}
                                      </h2>

                                      <div>
                                        <p className="membership">member</p>

                                        <div className="description">
                                          Khulna, Desktop Computers
                                        </div>

                                        <div className="price color mt-1">
                                          <span>TK 4,500</span>
                                          <span className="spacer"></span>
                                        </div>
                                        <Link
                                          href={
                                            "/Details/" +
                                            item["title"] +
                                            "?id=" +
                                            item["id"]
                                          }
                                          className="btn mt-2 btn-sm btn-outline-danger"
                                        >
                                          Add Cart
                                        </Link>
                                      </div>

                                      {/* <div className="top-ad">
                                  <a href="/" className="card-link">
                                    <div className="icon small"></div>
                                  </a>
                                </div> */}
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </Fade>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Area Close */}
        </div>
      </div>
    </div>
  );
};

export default page;
