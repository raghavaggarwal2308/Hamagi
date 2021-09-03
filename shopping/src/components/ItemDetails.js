import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commerce } from "../lib/commerce";
import "./../css/ItemDetails.css";
import {Link} from "react-router-dom";

function ItemDetails(props) {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const data = await commerce.products.retrieve(id);
      setProduct(data);
      setLoading(false);
    }
    if (id) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // console.log(product);

  return loading ? (
    <div
      style={{
        height: "100vw",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <div
        className="spinner-border text-warning"
        role="status"
        id="loader"
        style={{ marginTop: "20vh", height: "50px", width: "50px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="container mb-2" style={{ boxSizing: "border-box", overflow: "hidden" }}>
      <div className="row">
        <div className="col">
          <img
            id="itemPic"
            width="300px"
            style={{
              marginTop: "20vh",
              objectFit: "contain",
              marginLeft:"2vw"
            }}
            height="200px"
            src={product?.media?.source}
            alt="item"
          />
        </div>
        <div className="col" style={{ marginTop: "10vh" }}>
          <h3
            style={{
              textDecoration: "underline",
              textDecorationColor: "#edba00",
            }}
          >
            {product?.name}
          </h3>
          <p className="text-info">
            Category: {product?.categories[0]?.name}
            <span className="text-danger float-right">
              {product?.price?.formatted_with_symbol}
            </span>
          </p>
          <span id="o" className="fa fa-star text-warning"></span>
          <span id="t" className="fa fa-star text-warning"></span>
          <span id="th" className="fa fa-star text-warning"></span>
          <span id="f" className="fa fa-star text-warning"></span>
          <span id="fi" className="fa fa-star"></span>
          <hr></hr>
          <h3
            style={{
              textDecoration: "underline",
              textDecorationColor: "#edba00",
            }}
          >
            Description
          </h3>
          <p
            dangerouslySetInnerHTML={{
              __html: product?.description,
            }}
            className="card-text"
          ></p>
          <hr />
          <h3
            style={{
              textDecoration: "underline",
              textDecorationColor: "#edba00",
            }}
          >
            Reviews
          </h3>
          <div className="media border p-3">
            <img
              src="https://joeschmoe.io/api/v1/a"
              alt="ABC"
              className="mr-2 rounded-circle"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="media-body">
              <h5>
                ABC{" "}
                <small>
                  <i>Posted on February 19, 2016</i>
                </small>
              </h5>
              <p>Lorem ipsum...</p>
            </div>
          </div>
          <div className="media border p-3">
            <img
              src="https://joeschmoe.io/api/v1/b"
              alt="ABC"
              className="mr-2 rounded-circle"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="media-body">
              <h5>
                DEF{" "}
                <small>
                  <i>Posted on February 19, 2016</i>
                </small>
              </h5>
              <p>Lorem ipsum...</p>
            </div>
          </div>
          <br />
        </div>
        <div className="col" style={{ marginTop: "10vh", marginRight: "50px" }}>
          <div className="card">
            <div className="card-header bg-danger text-white">
              {" "}
              {product?.price?.formatted_with_symbol}
            </div>
            <div className="card-body">
              <Link to="/buy" className="btn btn-warning">
                <span className="fa fa-play"> </span> Buy Now
              </Link>
              <br></br>
              <br></br>
              <a
                href="#0"
                className="btn btn-info"
                onClick={() => props.handleAddToCart(product?.id, 1)}
              >
                <span className="fa fa-shopping-cart"> </span> ADD TO CART
              </a>
            </div>
            <div className="card-footer bg-success">
              <span className="text-white">Arrives: 5 week days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;