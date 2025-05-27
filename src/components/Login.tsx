import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/userSlice';
import type { RootState } from '../store/store';
import { useState } from 'react';

function Login() {
  const dispatch = useDispatch();
  const { isLoggedIn, currentUser } = useSelector((state: RootState) => state.user);
  const [userInputUsername, setUserInputUsername] = useState('');
  const [userInputPassword, setUserInputPassword] = useState('');
  const handleLogin = () => {
    dispatch(login({ username: userInputUsername, password: userInputPassword }));
  };
  return (
    <div className="home">
      <div className="left-section">
        <section className="reactmart-summary">
          <h2>Welcome to ReactMart</h2>
          <p>
            Based in Cape Town, South Africa, ReactMart is your premier online destination for quality electronics and
            lifestyle products. We pride ourselves on a curated selection of the latest gadgets, top-notch customer
            service, and lightning-fast delivery. ReactMart has you covered.
          </p>
        </section>
        <section className="customer-reviews">
          <h2>What Our Customers Are Saying</h2>
          <div className="review">
            <p>
              <i>
                "Fantastic service! My order arrived in just two days, and the quality of the products is top-notch."
              </i>{' '}
              - Sarah M.
            </p>
          </div>
          <div className="review">
            <p>
              <i>
                "I love ReactMart’s selection. They always have the latest tech, and their customer service is
                outstanding!"
              </i>{' '}
              - Jason K.
            </p>
          </div>
          <div className="review">
            <p>
              <i>"Support this local business! The shopping experience is so smooth and reliable."</i> - Megan R.
            </p>
          </div>
        </section>
      </div>
      {isLoggedIn && currentUser ? (
        <div className="welcome-paragraph">
          <h1>Welcome {currentUser.username}</h1>
        </div>
      ) : (
        <div className="login-container">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={userInputUsername}
            onChange={(e) => setUserInputUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={userInputPassword}
            onChange={(e) => setUserInputPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
export default Login;
