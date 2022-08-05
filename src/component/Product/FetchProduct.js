import React from "react";
import { useState, useEffect } from "react";
import "./FetchProduct.css";
import Carousel from "react-bootstrap/Carousel";

import PaymentService from "../../Service/PaymentService";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51LNuP7SDR0ZL4tTdWq1aCG9QB9qZKYnWbRTInV0IAOTfW9QlyWziY1a5ksOUgLcziWQICBa6fRmf7UTp6PVZWg7000oZqGnVqQ"
);

function FetchProduct(props) {
  const [value, setValue] = useState(1);
  const [post, setPost] = useState(null);

  useEffect(() => {
    PaymentService.getAll().then((response) => {
      setPost(response.data);
      props.productData(response.data);
    });
  }, []);

  if (!post) return null;

  window.onload = () => {
    const two = document.getElementsByClassName("product-info")[0];
    two.innerHTML = post.productDesc;
  };

  return (
    <div>
      <div className="details row" key={post.id}>
        <div className="box col-md-6 ">
          {/*col-md-6 / 8 */}
          <div className="row productinfo">
            <span
              className="d-xl-block d-lg-block d-md-none d-sm-none d-none"
              style={{ opacity: "0.5", fontSize: "11px" }}
            >
              APPLE PRODUCTS
            </span>
            <h4 className="mb-3 product-title">{post.productname}</h4>
            <p style={{ fontSize: "13px" }}>It's magic, remastered!</p>
            <ul className="list-space product-info"></ul>
            <p>SKU D5515AI</p>
          </div>
        </div>
        <div className="big-img col-md-6">
          <Carousel indicators={true} controls={false}>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={post.imageUrl[0].url1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={post.imageUrl[0].url2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={post.imageUrl[0].url3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={post.imageUrl[0].url4}
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default FetchProduct;
