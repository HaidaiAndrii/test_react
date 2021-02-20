import './App.css';
import { useState } from 'react';

function App() {
  const [userEmail, setEmail] = useState('');
  const [userPass, setPass] = useState('');
  const [isLoginError, setLoginError] = useState(false);
  const [isPassError, setPassError] = useState(false);
  const [isShowPass, setShowPass] = useState(false);
  const [isError, setError] = useState(false);

  const login = () => {
    if (!userEmail) {
      setLoginError(true);
      setError(true);
    } else {
      setLoginError(false);
      setError(false);
    }

    if (!userPass) {
      setPassError(true)
      setError(true);
    } else {
      setError(false);
      setPassError(false)
    }

    if(userEmail && userPass) {
      alert(`Email: ${userEmail}, Password: ${userPass}`);
    }
  }

  return (
    <div className="app">
      <div className="login">
        <div className="login__image"></div>
        <div className="login__form">
          <h2 className="login__logo">LOGIN</h2>
          <input type="text"
            className={!isLoginError ? 'login__input' : 'login__input login__input-error'}
            placeholder="Email address"
            onChange={event => setEmail(event.target.value)}
          />
          {isLoginError && <div className="error"><span className="error__text">Email required</span></div>}

          <div className="input__password">
            <input
              type={!isShowPass ? "password" : "text"}
              className={!isPassError ? "login__input" : "login__input login__input-error"}
              placeholder="Password"
              onChange={event => setPass(event.target.value)}
            />
            <div className={!isPassError ? "password__eye" : "password__eye password__eye-error"}>
              <input
                className={isShowPass? "pass__checkbox" : "pass__checkbox checkline"}
                type="checkbox"
                onClick={event => setShowPass(event.target.checked)}
              />
            </div>

            {isPassError &&
              <div className="error-pass">
                <span className="error__text">
                  Password required
              </span>
              </div>
            }
          </div>
          <button
            type="button"
            onClick={login}
            className={!isError ? "login__button" : "login__button button-error"}
          >
            LOG IN
          </button>
          <a href="#" className="login__link">
            Forgot your password?
          </a>
          <div className="register">
            <p className="register__text">
              Don’t have an account yet?
            </p>
            <a href="#" className="register__link">Register</a>
          </div>
        </div>
      </div>
      <div className="additional__pictures">
        <div className="sally"></div>
        <div className="sally-copy"></div>
        <div className="star-small"></div>
        <div className="plus"></div>
        <div className="botpictures">
          <div className="bot1"></div>
          <div className="bot2"></div>
          <div className="bot3"></div>
        </div>
        <div className="sally-small"></div>
      </div>
    </div>
  );
}

export default App;
