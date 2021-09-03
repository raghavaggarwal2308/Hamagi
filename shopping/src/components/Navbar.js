import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./../css/Navbar.css";
import { Link } from "react-router-dom";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";

function Navbar(props) {
  const [set, setCategory] = useState("Search By Category");
  const [top, setTop] = useState(set);

  function scrollUp() {
    let offsetTop = document.getElementById("nav").offsetTop;
    window.scrollTo({
      top: offsetTop - 100,
      behavior: "smooth",
    });
  }

  const changeActive = (e) => {
    let elements = document.querySelectorAll(".navbar-link");
    elements = Array.from(elements);
    elements.map((element) => element.classList.remove("active"));
    e.target.classList.add("active");
  };

  return (
    <div id="nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand" id="logo">
          hamagi
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item " onClick={changeActive}>
              <Link
                to="/"
                onClick={scrollUp}
                className="nav-link navbar-link active"
              >
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={changeActive}>
              <a className="nav-link navbar-link" href="#Furniture">
                Products
              </a>
            </li>
            <li className="nav-item" onClick={changeActive}>
              <a className="nav-link navbar-link" href="#about">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <form
          className="form-inline my-2 my-lg-0"
          style={{ marginLeft: "-15px" }}
        >
          <div className="dropdown mr-sm-2 col-9 col-sm-8 col-md-9">
            <div className="btn-group">
              <a
                className="btn btn-warning"
                href={"#" + top}
                onClick={() => setTop(set === "Search By Category" ? "" : set)}
              >
                <span className="fa fa-search"></span>
              </a>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn cat dropdown-toggle"
                  data-toggle="dropdown"
                >
                  {set}
                </button>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    onClick={() => setCategory("Search By Category")}
                    href="#nav"
                  >
                    Home
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => setCategory("Furniture")}
                    href="#Furniture"
                  >
                    Furniture
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => setCategory("Beauty Products")}
                    href="#Beauty Products"
                  >
                    Beauty Products
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => setCategory("Sports & Fitness")}
                    href="#Sports & Fitness"
                  >
                    Sports & Fitness
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => setCategory("Electronic Gadgets")}
                    href="#Electronic Gadgets"
                  >
                    Electronic Gadgets
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => setCategory("Fashion")}
                    href="#Fashion"
                  >
                    Fashion
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to="/cart">
                <ShoppingCartIcon />
                <span
                  style={{
                    position: "absolute",
                    marginLeft: "-10px",
                    marginTop: "-5px",
                  }}
                  className="badge badge-warning rounded-circle"
                >
                  {props.totalItems}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <a
        href="#nav"
        className="rounded-circle shadow fixed-bottom mb-4 ml-auto mr-4"
        style={{
          height: "55px",
          width: "55px",
          backgroundColor: "white",
          textAlign: "center",
          objectFit: "fill",
          padding: "10px",
        }}
      >
        <ArrowUpwardRoundedIcon style={{ color: "#ffc600" }} fontSize="large" />
      </a>
    </div>
  );
}

export default Navbar;
