import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import ReduxWrapper from "../../../redux/wrap-with-provider";
import { login, logout } from "../../../services/actions/auth";
import "../../../assets/css/modal.css";


const UserForms = ({ headers, unknownError }) => {
    
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [pseudo, setPseudo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [showLogin, setShowLogin] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
      const clearMessage = setInterval(() => {
        setMessage("");
        setErrorMessage("");
      }, 5000);
      return () => clearInterval(clearMessage);
    });
    
    const registerSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch("http://localhost:8000/api/users", {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            email,
            password,
            pseudo,
          }),
        });

        if (!res.ok) {
          console.log(unknownError(res.status));
          throw new Error("Failed to create account");
        }

        if (res.status === 201 || res.status === 200) {
          setPseudo("");
          setEmail("");
          setPassword("");
          setMessage("Your account has been created");
        }
      } catch (err) {
        setErrorMessage(err.message);
      }
    };

    const loginSubmit = async (e) => {
      e.preventDefault();
      if (loginEmail.trim() === "" || loginPassword.trim() === "") {
        setErrorMessage("Email and/or Password can not be empty");
        } else {
          dispatch(login(loginEmail, loginPassword)).then(() => {
            window.location.reload();
          });
        /* try {
          const res = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
              email: loginEmail,
              password: loginPassword,
            }),
            credentials: "include",
          });

          if (!res.ok) {
            if (res.status === 401) {
              console.log(unknownError(res.status));
              throw new Error(
                "Invalid credentials. Please check your password and/or email."
              );
            }
            console.log(unknownError(res.status));
            throw new Error("Failed to log in");
          }

          const userData = await res.json();

          if (res.status === 200) {
            const user = {
              id: userData.id,
              pseudo: userData.pseudo,
              images: userData.images,
            };
            getUser(user);
            localStorage.setItem("user", JSON.stringify(user));
            setLoginEmail("");
            setLoginPassword("");
            setMessage(`You are logged in ${user.pseudo}`);
          }
        } catch (err) {
          setErrorMessage(err.message);
        } */
      }
    };

    const logoutSubmit = useCallback(() => {
      dispatch(logout());
    }, [dispatch]);

    /* const logoutSubmit = () => {
      logout();
      try {
        const res = await fetch("http://localhost:8000/api/logout", {
          method: "GET",
          headers: headers,
          credentials: "include",
        });

        if (!res.ok) {
          console.log(unknownError(res.status));
          throw new Error("Failed to log out");
        }

        if (res.status === 204) {
          setMessage(`Goodbye ${userData.pseudo}!`);
          getUser(null);
          localStorage.clear();
        }

      } catch (err) {
        setErrorMessage(err.message);
      } 
    } */

    const showHideForm = () => {
      setShowLogin((current) => !current);
    };

  return (
    <>
      <div className="mb-1">
        <button onClick={logoutSubmit}>Logout</button>
      </div>
      {!showLogin && (
        <div className="register-form">
          {message && (
            <div>
              <h4 className="blue-text">{message}</h4>
            </div>
          )}
          {errorMessage && (
            <div>
              <h4 className="error-message">{errorMessage}</h4>
            </div>
          )}
          <form onSubmit={registerSubmit}>
            <div>
              <h1>Create your account</h1>
            </div>
            <label htmlFor="email">Choose a Pseudonym</label>
            <input
              type="text"
              name="pseudo"
              id="pseudo"
              placeholder="Pseudo"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
            />

            <label htmlFor="email">Your Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div>
              <button>Create my account!</button>
            </div>
            <div className="mt-2">
              <button onClick={showHideForm} className="yellow-text">
                I already have an account
              </button>
            </div>
          </form>
        </div>
      )}
      {showLogin && (
        <div className="login-form">
          {message && (
            <div>
              <h4 className="blue-text">{message}</h4>
            </div>
          )}
          {errorMessage && (
            <div>
              <h4 className="error-message">{errorMessage}</h4>
            </div>
          )}
          <form onSubmit={loginSubmit}>
            <div>
              <h1>Sign In</h1>
            </div>
            <label htmlFor="login-email">Enter Your Email Address</label>
            <input
              type="email"
              name="login-email"
              id="login-email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />

            <label htmlFor="login-password">Enter Your Password</label>
            <input
              type="password"
              name="login-password"
              id="login-password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <div>
              <button>Sign In</button>
            </div>
            <div className="mt-2">
              <button onClick={showHideForm} className="yellow-text">
                Create an account
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

const WrappedUserForms = () => (
  <ReduxWrapper element={<UserForms />} />
);

export default WrappedUserForms;