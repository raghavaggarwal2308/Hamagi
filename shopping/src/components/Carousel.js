import React from "react";
import "./../css/Carousel.css";

function Carousel() {
  return (
    <div id="carousel">
      <div id="demo" className="carousel slide shadow" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
          <li data-target="#demo" data-slide-to="3"></li>
        </ul>

        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{
              backgroundImage:
                "url('https://cache1.allpostersimages.com/images/homepage/hph/2021/apr/0417_apc_hp1_mobile1_50off_everything.gif')",
              opacity: "0.7",
            }}
          >
            <img
              width="100%"
              height="350vh"
              src="https://cache1.allpostersimages.com/images/homepage/hph/2021/apr/0417_apc_hp1_mobile1_50off_everything.gif"
              style={{ objectFit: "contain" }}
              alt="computer"
            />
          </div>
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                "url('https://indianonlinespices.com/wp-content/uploads/2019/01/how-to-buy-art-prints-artist-original-framed-art-prints-for-sale-online.jpg')",
              opacity: "0.7",
            }}
          >
            <img
              width="100%"
              height="350vh"
              src="https://indianonlinespices.com/wp-content/uploads/2019/01/how-to-buy-art-prints-artist-original-framed-art-prints-for-sale-online.jpg"
              style={{ objectFit: "contain" }}
              alt="toys"
            />
          </div>
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                "url('https://images.creativemarket.com/0.1.0/ps/6493706/1820/1214/m1/fpnw/wm1/2-.jpg?1559732826&s=5de70850556c4ba899170c1a74712921')",
              opacity: "0.7",
            }}
          >
            <img
              width="100%"
              height="350vh"
              src="https://images.creativemarket.com/0.1.0/ps/6493706/1820/1214/m1/fpnw/wm1/2-.jpg?1559732826&s=5de70850556c4ba899170c1a74712921"
              alt="furniture"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div
            className="carousel-item"
            style={{
              backgroundImage:
                "url('https://static-cse.canva.com/image/20747/poster.jpg ')",
              opacity: "0.7",
            }}
          >
            <img
              width="100%"
              height="350vh"
              src="https://static-cse.canva.com/image/20747/poster.jpg"
              style={{ objectFit: "contain" }}
              alt="beauty"
            />
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon bg-danger rounded-circle"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon bg-danger rounded-circle"></span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
