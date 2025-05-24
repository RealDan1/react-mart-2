import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import type { RootState } from '../store/store';

function Header() {
    const { currentUser, isLoggedIn } = useSelector((state: RootState) => state.user);
    return (
        <header className="header">
            <div className="logo-user">
                <h1 className="logo">ReactMart</h1>
                {isLoggedIn && currentUser && <p className="user">User: {currentUser.username}</p>}{' '}
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/register">register</Link>
                    </li>
                    <li>
                        <Link to="/products">products</Link>
                    </li>
                    <li>
                        <Link to="/cart">cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
