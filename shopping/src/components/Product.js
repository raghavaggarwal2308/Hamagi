import React from "react";
import "./../css/Product.css";
import { Link } from "react-router-dom";

function Product(props) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div id="product">
      <div>
        <div className="card" style={{ width: "250px" }}>
          <img
            className="card-img-top"
            src={props.product.media.source}
            style={{
              padding: "15px",
              height: "200px",
              width: "auto",
              objectFit: "contain",
            }}
            id="product_image"
            alt="Card_image"
          />
          <div className="card-body">
            <h4 className="card-title">
              {truncate(props.product.name, 12)}
              <span className="text-danger">
                {props.product.price.formatted_with_symbol}
              </span>
            </h4>
            <p
              dangerouslySetInnerHTML={{
                __html: truncate(props.product.description, 50),
              }}
              className="card-text"
            ></p>
            <Link
              to={`/item_details/${props.product?.id}`}
              // onClick={() => props.details(props.product)}
              className="btn btn-warning float-left"
            >
              Detail
            </Link>
            <a
              href="#0"
              className="btn btn-info float-right"
              onClick={() => props.handleAddToCart(props.product.id, 1)}
            >
              ADD TO CART
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
