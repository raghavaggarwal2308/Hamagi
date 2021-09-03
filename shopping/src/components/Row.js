import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./../css/Row.css";
import { commerce } from "./../lib/commerce";

function Row(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: [`${props.category.slug}`],
    });
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(items);
  return loading ? (
    <div
      style={{
        margin: "60px",
        width: "100vw",
        textAlign: "center",
      }}
    >
      <div
        className="spinner-border text-warning"
        role="status"
        style={{ marginTop: "15vh", height: "20px", width: "20px" }}
      ></div>
    </div>
  ) : (
    <div className="row_content" id={props.category.name}>
      <h1
        id="row_category"
        style={{
          textAlign: "center",
          fontSize: "50px",
          letterSpacing: "6px",
          padding: "2px",
        }}
      >
        {props.category.name}
      </h1>
      <div id="row_products">
        {items.map((item) => (
          <div key={item.id}>
            <Product product={item} handleAddToCart={props.handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
