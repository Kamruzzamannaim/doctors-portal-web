import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from 'react';
import Loading from "../Shared/Loading";

const CheckoutForm = ({appointment}) => {
    const stripe=useStripe();
    const elements=useElements();
    const[cardError,setCardError]=useState('');
    const[clientSecret,setClientSecret]=useState('');
    const[success,setSuccess]=useState('');
    const[transactionId,setTransactionId]=useState('');
    const[processing,setProcessing]=useState(false)

    
    const{price,patient,patientName,_id}=appointment;
 
  
   
    useEffect(() => {
        fetch('http://localhost:5000/create_payment_intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])


    const handleSubmit =async (event)=>{
        event.preventDefault();

        if(!elements || !stripe){
            return;
        }
        const card= elements.getElement(CardElement);

        if(card===null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);
        if(processing){
            return <Loading></Loading>
        }


        // confirm payment
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name:patientName,
                  email:patient,
                },
              },
            },
          );
          if(intentError){
            console.log(intentError);
            setCardError(intentError?.message)
          }
          else{
            setCardError('');
            setSuccess('congrats! your payment is success');
            setTransactionId(paymentIntent?.id)

           
            //store 
            const payment={
                appointment: _id,
                transactionId:paymentIntent?.id,


            }

            fetch(`http://localhost:5000/booking/${_id}
            `,{
                method:'PATCH',
                headers:{
                    "authorization":`bearer ${localStorage.getItem('accessToken')}`,
                    'content-type':'application/json'
                },
                body:JSON.stringify(payment)
                
            }).then(res=>res.json()).then(data=>{
                setProcessing(false);
                console.log(data);
            })


          }
        
       

    }
    
    return (
       <div>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-success btn-sm mt-4 " type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    {
        cardError && <p className="text-red-500">{cardError}</p>
    }
    {
        success && <div className="text-green-500">
            <p>{success}</p>
            <p className="font-bold"> Your transaction id is {transactionId}</p>
        </div>
    }
       </div>
    );
};

export default CheckoutForm;