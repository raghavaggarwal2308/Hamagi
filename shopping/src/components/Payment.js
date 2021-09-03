import React, { useState } from "react";
import {Link} from 'react-router-dom';

function Payment() {
  const [sh, setSh] = useState("");
  const [shu, setShu] = useState("");
  const [shcard, setShcard] = useState("");
  const [dis, setdis] = useState("");
  const [showupi, setupi] = useState("");

  function addOther() {
    var x = document.getElementById("card").checked;
    var y = document.getElementById("upi").checked;
  
    if (x) {
      setSh("show");
      setShcard("");
    } else {
      setSh("");
      setShcard("");
    }
    if (y) {
      setShu("show");
    } else {
      setShu("");
    }
  }

  function addCardNo() {
    let x = document.getElementById("cdno").value;
    if (x.length === 4 || x.length === 9 || x.length === 14) {
      document.getElementById("cdno").value = x + " ";
    }
  }

  function addCard() {
    let x = document.getElementById("cdno").value;
    let y = document.getElementById("cdn").value;
    let z = document.getElementById("exp").value;
    if (x === "" || y === "" || z === "") {
      alert("Please fill all the details correctly");
      setdis("");
    } else {
      setdis("modal");
      setSh("");
      setShcard("show");
    }
  }

  function verify() {
    let x = document.getElementById("upiid").value;
    if (x !== "" && x.includes("@")) {
      setupi("show");
    } else {
      alert("Please fill UPI id correctly");
      setupi("");
    }
  }

  return (
    <div className="container">
      <h3 style={{ marginTop: "-5vh" }}>Select a Payment Method</h3>
      <form style={{ border: "1px solid gray" }} className="rounded p-2">
        <input
          type="radio"
          onChange={addOther}
          name="payment"
          id="card"
          value="ADD DEBIT/CREDIT CARD"
        />{" "}
        <label>ADD DEBIT/CREDIT CARD</label>
        <span className="fa fa-credit-card ml-2 text-primary"></span>
        <br></br>
        <div className={"collapse" + sh}>
          <a
            href="#0"
            data-toggle="modal"
            data-target="#myModal"
            className="btn ml-4 btn-outline-primary"
          >
            <span className="fa fa-plus"> ADD CARD</span>
          </a>
        </div>
        <div className={"collapse" + shcard}>
          <h6 className="text-success">
            Card Added Successfully <span className="fa fa-check-circle"></span>
          </h6>
        </div>
        <hr></hr>
        <input
          type="radio"
          onChange={addOther}
          name="payment"
          id="upi"
          value="upi"
        />{" "}
        UPI<br></br>
        <div className={"collapse" + shu}>
          <span>Enter your UPI id</span>
          <br></br>
          <input type="text" id="upiid" placeholder="MobileNumber@upi" />{" "}
          <a href="#0" onClick={verify} className="btn btn-danger">
            Verify
          </a>
          <br></br>
          <div className={"collapse" + showupi}>
            <h6 className="text-success">
              Verified <span className="fa fa-check-circle"></span>
            </h6>
          </div>
        </div>
        <hr></hr>
        <input
          type="radio"
          onChange={addOther}
          name="payment"
          id="cod"
          value="cash"
          defaultChecked
        />{" "}
        Cash on Delivery <span className="fa fa-inr"></span>{" "}
        <span className="fa fa-money"></span>
        <br></br>
      </form>
      <br></br>
      <Link to="/thankyou" className="btn btn-warning">
        PAY NOW
      </Link>

      <div style={{ marginTop: "25vh" }} className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">Add a credit/debit card</h6>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <table className="table-responsive ml-2">
                <tr>
                  <td>
                    <span className="font-weight-bold mr-2">Card Number</span>
                  </td>
                  <td>
                    <input
                      onKeyUp={addCardNo}
                      id="cdno"
                      className="rounded"
                      style={{ border: "1px solid orange" }}
                      type="text"
                      maxLength="19"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="font-weight-bold mr-2">Name on Card</span>
                  </td>
                  <td>
                    <input
                      id="cdn"
                      className="rounded mt-2"
                      style={{ border: "1px solid orange" }}
                      type="text"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="font-weight-bold mr-2">Expiry Date</span>
                  </td>
                  <td>
                    <input
                      id="exp"
                      className="rounded mt-2"
                      placeholder="mm/yy"
                      style={{ width: "60px", border: "1px solid orange" }}
                      type="text"
                    />
                  </td>
                </tr>
              </table>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                onClick={addCard}
                className="btn btn-warning mr-auto"
                data-dismiss={dis}
              >
                ADD CARD
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
