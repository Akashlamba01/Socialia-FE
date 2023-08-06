import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastStyle from "../styles/toast.module.css";
import { login } from "../api";

const Login = ({ styles }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const showToastMessage = () => {
    console.log("jjjj");
    toast.success("Error ", {
      position: toast.POSITION.TOP_RIGHT,
      className: `${toastStyle.success}`,
    });
  };

  // const login = API_URLS.login;

  // const userLogin = async (email, password) => {
  //   await fetch("http://localhost:8000/users/create-session", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email,
  //       password,
  //       // userId: Math.random().toString(36).slice(2),
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //       // "Access-Control-Allow-Origin": "http://localhost:3000",
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Credentials": "true",
  //     },
  //   })
  //     .then((response) => {
  //       toast.success("Error ", {
  //         position: toast.POSITION.TOP_RIGHT,
  //         className: `${toastStyle.success}`,
  //       });
  //       response.json();
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // useEffect({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoggingIn(true);

    if (!email || !password) {
      toast.error("Soting Wrong! ", {
        position: toast.POSITION.TOP_RIGHT,
        // className: `${toastStyle.success}`,
      });
    }

    const response = await login(email, password);

    if (response.success) {
      toast.success("Loged in successfully! ", {
        position: toast.POSITION.TOP_RIGHT,
        // className: `${toastStyle.success}`,
      });
    } else {
      toast.error("Soting Wrong! ", {
        position: toast.POSITION.TOP_RIGHT,
        // className: `${toastStyle.success}`,
      });
    }
    setLoggingIn(false);
  };

  return (
    <div>
      <div className={styles.heading}>
        {/* <!-- <h2>Connectopia</h2>
      <h2>SocialSphere</h2> --> */}
        <h2>Socialia</h2>
      </div>
      <div className={styles.loginSection}>
        <form id="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" disabled={loggingIn}>
            {loggingIn ? "Logging in..." : "Log In"}
          </button>
        </form>
        <br />
        <p>
          <Link to="">Forgotten Password?</Link>
        </p>

        <br />
        <hr />
        <br />
        <p>oR</p>
        <br />

        <Link onClick={() => showToastMessage()}>
          <button>Create a new account !</button>
          <ToastContainer />
        </Link>

        <Link to="#">
          <button className={styles.googleLoginBtn}>
            <i className="fa-brands fa-google"></i> Login with google
          </button>
        </Link>
      </div>

      {/* <script>
      let navLinks = document.getElementById("navLinks");
      function showMenu() {
        navLinks.style.right = "0";
      }
      function hideMenu() {
        navLinks.style.right = "-200px";
      }
    </script> */}
    </div>
  );
};

export default Login;
