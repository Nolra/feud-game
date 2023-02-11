import './index.css';
import { useState } from 'react';
import gameAPI from '../../api/index.js'

function Login(props) {
  const [login, setLogin] = useState("Login");
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [validation, setValidation] = useState(true);
  const [error, setError] = useState(false);


  function loginSetter(loginChange) {
    setLogin(loginChange);
    setValidation(true);
    setError(false);
  }

  function loginHandler() {
    const emailValid = loginValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const passwordValid = passwordValue.length >= 3;
    if (emailValid && passwordValid) {
      if (login === "Login") {
        gameAPI.postLogin({
          email: loginValue, 
          password: passwordValue,
        })
        .then((result) => okEvent(result))
        .catch((result) => errorEvent())
      } else if (login === "Registration") {
        gameAPI.postRegister({
          email: loginValue, 
          password: passwordValue
        })
        .then(() => 
          gameAPI.postLogin({
            email: loginValue, 
            password: passwordValue,
          })
          .then((result) => okEvent(result))
          .catch((result) => errorEvent())
        )
        .catch((result) => errorEvent())
      }

      function errorEvent() {
        setError(true);
      }
      function okEvent(result) {
        setError(false);
        props.setUser(result);
        props.setEnter("Menu");
      }
    } else {
      setValidation(false)
    }
  }

  let screen;
  if (localStorage.getItem("token_feud")) {
    return ( <div className="spinner-wrapper">
               <div className="spinner"></div>
             </div> 
    )
  }

  if (login === "Login") {
    screen = 
      <>
        <h1 className="title">Феод</h1>
        <div className="login-action">
        <form className="login-form">
          <div className="row">
            <label htmlFor="login">E-mail</label>
            <input type="text" id="login" name="login" onChange={(event) => setLoginValue(event.target.value)}/>
          </div>
          <div className="row">
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" name="password" onChange={(event ) => setPasswordValue(event.target.value)}/>
          </div>
          {!validation ? 
            <div className="row">
              <label>Неверно заполнены поля.<br/>Проверьте пароль - не менее 3 символов<br/>и правильность e-mail</label>
            </div> : undefined
          }
          {error ? 
            <div className="row">
              <label>Возникла ошибка при отправке запроса.<br/> Проверьте правильность пароля, <br/> e-mail и повторите попытку.</label>
            </div> : undefined
          }
          <div className="row">
            <div className="come-in button" onClick={loginHandler}>Войти</div>
          </div>
        </form>
          <div className="divider"></div>
          <div className="reg-in button" onClick={() => loginSetter("Registration")}>Регистрация<span></span></div>
        </div>
      </>
  } else if (login === "Registration") {
    // Второй экран Логина
    screen = 
      <>
        <h1 className="title">Феод</h1>
        <form className="login-form">
          <div className="row">
            <label htmlFor="login">E-mail</label>
            <input type="text" id="login" name="login" onChange={(event) => setLoginValue(event.target.value)}/>
          </div>
          <div className="row">
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" name="password" onChange={(event ) => setPasswordValue(event.target.value)}/>
          </div>

          {!validation ? 
            <div className="row">
              <label>Неверно заполнены поля.<br/>Проверьте пароль - не менее 3 символов<br/>и правильность e-mail</label>
            </div> : undefined
          }
          {error ? 
            <div className="row">
              <label>Возникла ошибка при отправке запроса.<br/> Проверьте правильность пароля, <br/> e-mail и повторите попытку.</label>
            </div> : undefined
          }
          <div className="row">
            <div className="reg-in back-in-login button" onClick={() => loginSetter("Login")}><span></span>Назад</div>
          </div>
          <div className="row">
            <div className="reg-in button" onClick={loginHandler}>Продолжить<span></span></div>
          </div>
        </form>
      </>
  }
  return (
  	<div className="login">
      {screen}
  	</div>
  );
}

export default Login;
