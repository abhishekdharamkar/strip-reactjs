import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm"

const stripePromise = loadStripe("pk_test_51LNuP7SDR0ZL4tTdWq1aCG9QB9qZKYnWbRTInV0IAOTfW9QlyWziY1a5ksOUgLcziWQICBa6fRmf7UTp6PVZWg7000oZqGnVqQ");

export default function CreatePaymentIntent(){
const [clientSecret, setClientSecret] = useState("");

    const handleclick=()=>{
        console.log("hey")
  fetch("http://localhost:8080/create-payment-intent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret));

    }
const appearance = {
  theme: 'stripe',
};
const options = {
  clientSecret,
  appearance,
};
return(
    <div>
    <button onClick={handleclick}>Click</button>
     {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
);
}
