import { useRef } from "react";
import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store/index";

const Auth = () => {
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  

  const formSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordInputRef}/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
