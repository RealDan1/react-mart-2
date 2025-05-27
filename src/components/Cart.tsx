import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeliveryModal from './DeliveryModal';
import { clearCart } from '../store/cartSlice';
import type { RootState } from '../store/store';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const [shipmentMethod, setShipmentMethod] = useState('');
  const [showModal, setShowModal] = useState(false);

  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].price;
  }
  totalPrice = Math.round(totalPrice * 100) / 100;

  const handleShipmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShipmentMethod(e.target.value);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <Card key={index} className="cart-item">
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Price: R{item.price}</Card.Text>
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
            <Button variant="danger" onClick={handleClearCart} className="clear-cart-btn">
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
