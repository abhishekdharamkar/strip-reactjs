import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import "./App.css";
import FetchProduct from "./componenet/FetchProduct";
import NavBar from "./componenet/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./componenet/Counter";
import ContactNavbar from "./componenet/ContactNavbar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const stripePromise = loadStripe(
  "pk_test_51LNuP7SDR0ZL4tTdWq1aCG9QB9qZKYnWbRTInV0IAOTfW9QlyWziY1a5ksOUgLcziWQICBa6fRmf7UTp6PVZWg7000oZqGnVqQ"
);

function App() {
  const [quantity, setValue] = useState(1);
  const [ProductData, setProductData] = useState([]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  console.log(show, "show");
  const handleClick = async () => {
    const stripe = await stripePromise;
    try {
      const response = await axios({
        url: "http://localhost:8080/checkout",
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        data: quantity,
      });
      const session = response.data;
      console.log("responseeee", session);
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.log("redirectToCheckout Fails", result.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // sweet Alert
  const MySwal = withReactContent(Swal);
  const handleSuccess = () => {
    console.log("success");
    handleShow();
    MySwal.fire({
      // icon:"success",
      showConfirmButton: false,
      imageUrl:
        "https://www.pngall.com/wp-content/uploads/2016/07/Success-PNG-Image.png",
      imageHeight: 100,
      title: "Purchase Successful",
      showCloseButton: true,
      html:
        '<p style="font-family: Poppins">You will get your product soon!</p><br>' +
        '<p style="font-family: Poppins">Get ready to experience the spatial audio with <br>adaptive EQ that tunes music to your ears.</p>',
      timer: 218000,
    });
  };
  const handlefailure = () => {
    console.log("fail");
    MySwal.fire({
      icon: "error",
      title: "Payment failed",
      timer: 4000,
    });
  };

  const location_url = window.location.href;
  const checkQueryParams = () => {
    const urls = location_url.split("/");
    console.log(urls[3], "url");

    if (urls[3] === "success") {
      handleSuccess();
    }

    if (urls[3] === "cancle") {
      handlefailure();
    }
  };
  useEffect(() => {
    checkQueryParams();
  }, [location_url]);
  return (
    <div className="App">
      <ContactNavbar />
      <NavBar />
      <div className="navbar3">
        <p className="fw-bold about-product">About Product</p>
        <div className="right">
          <p
            className="d-sm-inline-block d-inline-block"
            style={{ marginTop: "1rem" }}
          >
            Price <b>&#8377;299.00</b>
          </p>
          <div className="right1">
            <Counter counter={setValue} />
          </div>
          <div className="right2">
            <button className="buy-now-button" onClick={handleClick}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <FetchProduct productData={setProductData} />
    </div>
  );
}

export default App;
