import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';
import { Helmet } from 'react-helmet';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext)
  const { cart } = state;
  
  const handleRemove = product => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    // vamos a utilizarlo como un reduce y tomar cada item de precio
    // y sumarlo en uno mismo.
    const reducer = (accumulator, currentValue) => accumulator +currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum; 
  }

  return (
    <>
      <Helmet>
        <title>Lista de Pedidos</title>
      </Helmet>
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3>: <h3>Sin Pedidos ...</h3>}
        {cart.map((item) => (
          <div className="Checkout-item" key={item}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>$
              {item.price}
              </span>
            </div>
            <button type="button" onClick={handleRemove(item)}>
              <i>Eliminar</i>
            </button>
            
          </div>
        ))}
      </div>
      {cart.length > 0 && (

      <div className="Checkout-sidebar">
        <h3>{`Precio total: $ ${handleSumTotal()}`}</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
      )}
    </div>
    </>
  )
}

export default Checkout;