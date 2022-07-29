import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51LQFq7JUWsYm25IlR1J5ABi0OYjJvnScHmIuSPfGYmFIwNJTtutTzafB88y7w4jnzVO7ViUNjqlGsrlKZCRcd8Ct00Fowhz5KF"
);

const Payment = () => {
  const { id } = useParams();
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const { slot, patientName, date, price } = appointment;
  return (
    <div>
      
      <div class="card flex-shrink-0 w-f shadow-2xl bg-base-100 my-12">
      <div class="card-body">
      <div class="text-center lg:text-left">
            <h1 class="text-2xl font-bold">Hello, {patientName}</h1>
            <p class="py-6">
              we will see you on {date} at{slot}
            </p>
            <p className="text-success">you have to pay ${price}</p>
          </div>
      </div>

      </div>
         
          <div class="card flex-shrink-0 w-f shadow-2xl bg-base-100">
            <div class="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment} />
              </Elements>
            </div>
          </div>
        </div>
    
  );
};

export default Payment;
