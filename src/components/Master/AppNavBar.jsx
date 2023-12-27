"use client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import UserDropDown from "@/components/Master/UserDropDown";
import LanguageSwitcher from "@/components/Master/LanguageSwitcher";

function AppNavBar(props) {
  return (
    <div className="py-2 bg-info shadow-sm">
      <Navbar expand="lg">
        <div className="container">
          <Link className="text-decoration-none" href={"/"}>
            <div className="navbar-brand">
              <h3 className="nav-logo">
                <i className="bi bi-reddit"></i> Gorib
              </h3>
            </div>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="link-menu" href={`/Products/`}>
                All Ads
              </Link>
              <LanguageSwitcher />
            </Nav>
          </Navbar.Collapse>
          {props.firstName === "0" ? (
            <Link href="/User/Login" className="btn text-light">
              <i className="bi bi-person-fill fs-5 text-light"></i> Login
            </Link>
          ) : (
            <UserDropDown />
          )}
          <Link href={"/"} className="post-btn ms-3">
            Post your ad
          </Link>
        </div>
      </Navbar>
    </div>
  );
}

export default AppNavBar;
