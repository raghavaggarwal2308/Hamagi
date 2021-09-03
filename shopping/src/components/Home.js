import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Row from "./Row";
import { commerce } from "./../lib/commerce";

function Home(props) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    setCategories(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
        style={{ marginTop: "15vh", height: "50px", width: "50px" }}
      ></div>
    </div>
  ) : (
    <div style={{ minHeight: "90vh" }}>
      <Carousel />
      {categories.map((category) => (
        <div key={category.id}>
          <Row category={category} handleAddToCart={props.handleAddToCart} />
        </div>
      ))}
    </div>
  );
}

export default Home;
