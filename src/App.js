import './App.css';
import {userState, useState} from 'react';

function App() {


  const [userEmail, setEmail] = useState('');
  const [userPass, setPass] = useState('');
  const [isLoginError, setLoginError] = useState(false);
  const [isPassError, setPassError] = useState(false);

  const login = () => {
    //alert(userEmail);
    if(!userEmail) {
      setLoginError(true);
    } else {
      setLoginError(false);
    }

    if(!userPass) {
      setPassError(true)
    } else {
      setPassError(false)
    }


    console.log(userEmail.length,userPass);
  }

  return (
    <div className="app">
      <div className="login">
        <div className="login__image"></div>
        <div className="login__form">
          <h2 className="login__logo">LOGIN</h2>
          <input type="text" className="login__input" placeholder="Email address" onChange={event => setEmail(event.target.value)} />
          {isLoginError && <div className="error"><span className="error__text">Email required</span></div>}
          
          <div className="input__password">
            <input type="password" className="login__input" placeholder="Password" onChange={event => setPass(event.target.value)} />
            <div className="password__eye">
              <input type="checkbox" />
            </div>
            {isPassError && <div className="error-pass"><span className="error__text">Password required</span></div>}
          </div>
            <button type="button" onClick={login} className="login__button">LOG IN</button>
            <a href="#" className="login__link">Forgot your password?</a>
            <div className="register">
              <p className="register__text">Don’t have an account yet?</p>
              <a href="#" className="register__link">Register</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
