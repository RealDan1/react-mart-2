import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeliveryModal from './DeliveryModal';
import { clearCart } from '../store/cartSlice';
import type { RootState } from '../store/store';

function Cart() {
  const cartState = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  // cartItems is now an array of { product, quantity }
  const cartItems = cartState.cartItems;

  const [shipmentMethod, setShipmentMethod] = useState('');
  const [showModal, setShowModal] = useState(false);

  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].product.price * cartItems[i].quantity;
  }
  totalPrice = Math.round(totalPrice * 100) / 100;

  const handleShipmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShipmentMethod(e.target.value);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(({ product, quantity }, index) => (
            <Card key={index} className="cart-item">
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: R{product.price.toFixed(2)}</Card.Text>
                <Card.Text>Quantity: {quantity}</Card.Text>
              </Card.Body>
            </Card>
          ))}
          {totalPrice > 0 && (
            <div className="total-price">
              <h2>Total Price: R{totalPrice}</h2>
            </div>
          )}
          {cartItems.length > 0 && (
            <div className="shipment-section">
              <h3>Choose Your Shipment Method</h3>
              <select value={shipmentMethod} onChange={handleShipmentChange} className="shipment-select">
                <option value="">Select a method</option>
                <option value="standard">Standard: R100</option>
                <option value="expedited">Expedited: R150</option>
                <option value="nextDay">Next Day: R200 (when available)</option>
              </select>
              <Button variant="info" onClick={toggleModal} style={{ marginLeft: '1rem' }}>
                Delivery FAQ
              </Button>
            </div>
          )}
          <div className="cart-actions">
            <Button variant="danger" onClick={() => dispatch(clearCart())} className="clear-cart-btn">
              Clear Cart
            </Button>
            <Link to="/cart">
              <Button variant="primary" className="checkout-btn">
                Checkout
              </Button>
            </Link>
          </div>
          {showModal && <DeliveryModal onClose={toggleModal} />}
        </>
      )}
    </div>
  );
}

export default Cart;
