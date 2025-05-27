import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../store/store';
import '../styles/Header.css';
import { useState } from 'react';

function Header() {
  const { currentUser, isLoggedIn } = useSelector((state: RootState) => state.user);
  const cartState = useSelector((state: RootState) => state.cart);
  const [showCartSummary, setShowCartSummary] = useState(false);

  // cartItems is now an array of { product, quantity }
  const summaryItems = cartState.cartItems;

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-user">
          <h1 className="logo">ReactMart</h1>
          {isLoggedIn && currentUser && <p className="user">User: {currentUser.username}</p>}
        </div>
        <nav className="main-nav">
          <ul className="nav-list">
            <li>
              <Link to="/">login</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
          </ul>
        </nav>
        <div
          className="cart-btn-container"
          onMouseEnter={() => setShowCartSummary(true)}
          onMouseLeave={() => setShowCartSummary(false)}
        >
          <Link to="/cart">
            <button className="cart-btn" aria-label="Cart">
              <span className="cart-icon" aria-hidden="true">
                {/* Simple SVG cart icon */}
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m1-13a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </span>
              <span className="cart-label">Cart</span>
            </button>
          </Link>
          {showCartSummary && (
            <div className="cart-summary-popup">
              <div className="cart-summary-items">
                {summaryItems.length > 0 ? (
                  summaryItems.slice(0, 3).map(({ product, quantity }) => (
                    <div className="cart-summary-item" key={product.title}>
                      <span>{product.title}</span>
                      <span>x{quantity}</span>
                    </div>
                  ))
                ) : (
                  <div className="cart-summary-empty">Cart is empty</div>
                )}
                {summaryItems.length > 3 && <div className="cart-summary-more">...and more</div>}
              </div>
              <Link to="/cart">
                <button className="cart-summary-checkout-btn">Checkout</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
