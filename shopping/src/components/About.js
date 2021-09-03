import React from "react";
import "./../css/About.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function About() {
  return (
    <div id="about" className="container-fluid bg-dark text-white">
      <div id="about_options">
        <div className="options_break">
          <div>
            <h3>About</h3>
            <ul>
              <li>
                <a href="#0">Contact Us</a>
              </li>
              <li>
                <a href="#0">About Us</a>
              </li>
              <li>
                <a href="#0">Careers</a>
              </li>
              <li>
                <a href="#0">Press</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Help</h3>
            <ul>
              <li>
                <a href="#0">Payment</a>
              </li>
              <li>
                <a href="#0">Shipping</a>
              </li>
              <li>
                <a href="#0">Cancellation & Returns</a>
              </li>
              <li>
                <a href="#0">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="options_break">
          <div>
            <h3>Policy</h3>
            <ul>
              <li>
                <a href="#0">Return Policy</a>
              </li>
              <li>
                <a href="#0">Terms of Use</a>
              </li>
              <li>
                <a href="#0">Security</a>
              </li>
              <li>
                <a href="#0">Privacy</a>
              </li>
              <li>
                <a href="#0">Sitemap</a>
              </li>
              <li>
                <a href="#0">ERP Compliance</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Social</h3>
            <ul>
              <li>
                <a href="#0">Facebook</a>
              </li>
              <li>
                <a href="#0">Twitter</a>
              </li>
              <li>
                <a href="#0"> Youtube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="address">
        <h3>Registered Office Address:</h3>
        <p>
          Hamagi Internet Private Limited, Buildings Alyssa, Begonia & Clove
          Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
          Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107
        </p>
      </div>
      <br />
      <div>
        <div className="text-center">
          <h1
            style={{
              fontFamily: "cursive",
              fontWeight: 3000,
              textDecoration: "overline",
              textDecorationColor: "#FFC600",
              textDecorationThickness: "3px",
            }}
          >
            hamagi
          </h1>
        </div>
      </div>
      <div id="contact">
        <InstagramIcon />
        <LinkedInIcon />
        <GitHubIcon />
        <EmailIcon />
        <TwitterIcon />
      </div>
      <div id="copyright">
        &#169; 2021 | Created by <strong>Hamagi Enterprises</strong>
      </div>
    </div>
  );
}

export default About;
