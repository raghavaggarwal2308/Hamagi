import React, { useState } from "react";
import CartItem from "./CartItem";
import "./../css/Cart.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorRoundedIcon from "@material-ui/icons/ErrorRounded";
import { Link } from "react-router-dom";

function CartRow(props) {
  const isEmpty = 0;
  const EmptyCart = () => {
    return (
      <div>
        <h2>Empty cart</h2>
      </div>
    );
  };

  const FilledCart = () => {
    const [buyCart, setbuy] = useState("/cart");

    function checkCart() {
      if (props?.cart.subtotal.raw === 0) {
        setbuy("/cart");
        alert("Your Cart is Empty");
        return "/cart";
      } else {
        setbuy("/buy");
        return "/buy";
      }
    }

    return (
      <div id="cart_content">
        <div id="cart_products">
          {props?.cart &&
            props?.cart.line_items.map((item) => (
              <div key={item.id}>
                <CartItem
                  item={item}
                  handleRemoveFromCart={props?.handleRemoveFromCart}
                  handleUpdateCartQty={props?.handleUpdateCartQty}
                />
              </div>
            ))}
        </div>
        <div id="cart_add">
          {(props?.cart && props?.cart.subtotal.raw) > 500 ? (
            <p>
              <CheckCircleIcon id="tick_icon" />
              &nbsp;Free Delivery
            </p>
          ) : (
            <div id="delivery_content">
              <p
                style={{
                  display: "flex",
                  margin: "0",
                }}
              >
                <ErrorRoundedIcon id="warning_icon" />
                &nbsp;Delivery Charges = &#8377;50.00
              </p>
              <p
                style={{
                  fontSize: "0.7em",
                  padding: "0 0 0 30px",
                }}
              >
                Minimum order of &#8377;500 for free delivery
              </p>
            </div>
          )}
          <h4>
            Products Total: <br />
            <span className="text-danger">
              {props.cart && props?.cart.subtotal.formatted_with_symbol}
            </span>
          </h4>
          <h2>
            Subtotal : <br />
            <span className="text-success">
              &#8377;
              {props.cart &&
                (props?.cart.subtotal.raw > 500 ||
                props?.cart.subtotal.raw === 0
                  ? props?.cart.subtotal.formatted
                  : parseInt(props?.cart.subtotal.formatted.replace(/,/g, "")) +
                    50)}
            </span>
          </h2>
          <div id="pay_buttons">
            <Link
              to={buyCart}
              onClick={checkCart}
              className="btn btn-warning mt-3"
            >
              Proceed to Buy
            </Link>
            &nbsp;
            <Link to="/" className="btn btn-info mt-3">
              ADD MORE
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return <div>{isEmpty ? <EmptyCart /> : <FilledCart />}</div>;
}

export default CartRow;
