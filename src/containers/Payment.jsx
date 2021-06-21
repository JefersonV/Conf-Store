import React from 'react';
import '../styles/components/Payment.css';

const Payments = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Order Summary:</h3>
        <div className="Payment-button">Payment button with Paypal</div>
      </div>
      <div></div>
    </div>
  );
};

export default Payments;