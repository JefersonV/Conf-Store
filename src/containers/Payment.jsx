import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button'
import '../styles/components/Payment.css';

const Payments = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart } = state;
  const history = useHistory();

  const paypalOptions = {
    clientId: 'ATN4MgsCVKSXinkSTL1YqlANTikW5fXyo5C7TkyVUG7JB0DTr1G2aabkWFF9Uz6kKo61tL48cfWpomc4',
    intent: 'capture',
    currency: 'USD',
  }

  //configuración del Layout
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handleSumTotal = () => {
    // vamos a utilizarlo como un reduce y tomar cada item de precio
    // y sumarlo en uno mismo.
    const reducer = (accumulator, currentValue) => accumulator +currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum; 
  }

  const handlePaymentSuccess = (data) => {
    console.log(data)
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data
      }
      addNewOrder(newOrder);
      history.push('/checkout/success')
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Order Summary:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$
              {' '}
              {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
        <PayPalButton
          paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={handleSumTotal()}
          onPaymentStart={() => console.log('start Payment')}
          onPaymentSuccess={data => handlePaymentSuccess(data)}
          onPaymentError={error => console.log(error)}
          onPaymentCancel={data => console.log(data)}
        />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payments;