import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutBtn = () => {

    const onToken = (token) => {

        
        console.log(token);
    };
    const myStripeKey = "pk_live_51K5LmPSHaJtAJX4Y2GbAkYDOv8msjlt9JgocWDsc0nS3SjKqDU9EzTdk8bZUh1KzQ1nlop4aRdFuFI5Z4IfA7FCm00Lxhmrinc"

  return (
    <StripeCheckout 
    token={onToken} 
    stripeKey={myStripeKey} 
    name="Electric Store" // the pop-in header title
  description="You Dream, We Build!" // the pop-in header subtitle
  image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" 
  panelLabel="Give Money" 
  amount={200}
  allowRememberMe
//   shippingAddress
    />
  );
};

export default StripeCheckoutBtn;
