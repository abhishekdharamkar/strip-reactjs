import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./FetchProduct.css";
import Carousel from "react-bootstrap/Carousel";
import Counter from "./Counter";
import PaymentService from "../Service/PaymentService";

import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const stripePromise = loadStripe(
  "pk_test_51LNuP7SDR0ZL4tTdWq1aCG9QB9qZKYnWbRTInV0IAOTfW9QlyWziY1a5ksOUgLcziWQICBa6fRmf7UTp6PVZWg7000oZqGnVqQ"
);


function FetchProduct(props) {
  const [value, setValue] = useState(1);
  const [post, setPost] = React.useState(null);

  const [modalShow, setModalShow] = React.useState(false);

  React.useEffect(() => {
    PaymentService.getAll().then((response) => {
      setPost(response.data);
      props.productData(response.data);
    });
  }, []);
  
  // console.log(post,"qqqqqqqqqqqqqqqqqqqqqq")
  if (!post) return null;

  window.onload=()=>{
  const two = document.getElementsByClassName('product-info')[0];
    two.innerHTML = post.productDesc
}
  

  return (
    <div>
     
      {/* <div className="row">
        <div className="col-md-6">About Product</div>

        <div className="col-md-6 right">
          <div className="right1">
            {" "}
            <Counter counter={setValue} />
          </div>
          <div className="right2">
            <button className="buynow" onClick={handle}>
              Buy Now
            </button>
          </div>
        </div>
      </div> */}

      
      <div className="details row" key={post.id}>
        <div className="box col-md-6 ">
          {/*col-md-6 / 8 */}
          <div className="row productinfo">
            {/* <h2>{post.product_name}</h2>
            <span>{post.product_price} ₹</span>
            <p>{post.product_info}</p> */}
            <span
              className="d-xl-block d-lg-block d-md-none d-sm-none d-none"
              style={{ opacity: "0.5", fontSize: "11px" }}
            >
              APPLE PRODUCTS
            </span>
            <h4 className="mb-3 product-title">
             {post.productname}
            </h4>
            <p style={{ fontSize: "13px" }}>It's magic, remastered!</p>
            
            <ul className="list-space product-info">
               
            </ul>
           
            

          </div>
        </div>
        <div className="big-img col-md-6">
          <Carousel>
            <Carousel.Item controls={false} interval={1000}>
              <img className="d-block w-100" src={post.imageUrl[0].url1} alt="First slide" />
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
     

      {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
      <div></div>
    </div>
  );
}
export default FetchProduct;

// function MyVerticallyCenteredModal(props) {
  // const [clientSecret, setClientSecret] = useState("");
  // console.log(props.show)
  // // switch (props.show) {
   
  //   // case 1: console.log(props.show)
  //       console.log("modal");
  //   fetch("http://localhost:8080/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  //     // break;
  // // }
  // const appearance = {
  //   theme: "stripe",
  // };
  // const options = {
  //   clientSecret,
  //   appearance,
  // };
  // return (
  //   <Modal
  //     // onload={handleclick()}
  //     {...props}
  //     size="lg"
  //     aria-labelledby="contained-modal-title-vcenter"
  //     centered
  //   >
  //     <Modal.Header closeButton>
  //       <Modal.Title id="contained-modal-title-vcenter">
  //         Modal heading
  //       </Modal.Title>
  //     </Modal.Header>
  //     <Modal.Body>
  //       {clientSecret && (
  //         <Elements options={options} stripe={stripePromise}>
  //           <CheckoutForm />
  //         </Elements>
  //       )}
  //     </Modal.Body>
  //     <Modal.Footer>
  //       <Button onClick={props.onHide}>Close</Button>
  //     </Modal.Footer>
  //   </Modal>
  // );
// }








