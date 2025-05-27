import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../store/store';
import './Header.css';

function Header() {
  const { currentUser, isLoggedIn } = useSelector((state: RootState) => state.user);
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
        <div className="cart-btn-container">
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
        </div>
      </div>
    </header>
  );
}
export default Header;
