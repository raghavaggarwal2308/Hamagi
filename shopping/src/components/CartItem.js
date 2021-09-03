import React from "react";
import "./../css/Cart.css";

function CartItem(props) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div id="cart_item_content" className="alert alert-dismissible">
      <div id="item_image">
        <img
          src={props.item.media.source}
          alt="Product_image"
          id="cart_item_image"
        />
      </div>
      <div id="cart_item_details">
        <div id="cart_item_price">
          <h3>{truncate(props.item.name, 25)}</h3>
          <h3 className="text-danger">
            &#8377;
            {props.item.price.raw}
          </h3>
        </div>
        <div>
          <p style={{ margin: "0" }}>In Stock</p>
          <p>Eligible for free shipping</p>
        </div>
        <div>
          <div>
            <span className="border border-info rounded p-2">
              <span
                className="fa fa-minus text-danger"
                id="minus"
                onClick={() =>
                  props.handleUpdateCartQty(
                    props.item.id,
                    props.item.quantity - 1
                  )
                }
              ></span>
              <span id="set" className="text-primary">
                {" "}
                Qty: {props.item.quantity}{" "}
              </span>
              <span
                className="fa fa-plus text-success"
                onClick={() =>
                  props.handleUpdateCartQty(
                    props.item.id,
                    props.item.quantity + 1
                  )
                }
                id="add"
              ></span>
            </span>
            <span
              className="fa fa-trash float-right text-warning"
              onClick={() => props.handleRemoveFromCart(props.item.id)}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
