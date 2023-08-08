import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import toastStyle from "../styles/toast.module.css";
import { useAuth, useProvideAuth } from "../hooks";

const Login = ({ styles }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const history = useNavigate();

  const auth = useAuth();
  console.log(auth);

  const showToastMessage = () => {
    // console.log("jjjj");
    toast.success("Error ", {
      position: toast.POSITION.TOP_RIGHT,
      className: `${toastStyle.success}`,
    });
  };

  const goToSignup = () => {
    history("/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoggingIn(true);

    if (!email || !password) {
      toast.error("Soting Wrong! ", {
        position: toast.POSITION.TOP_RIGHT,
        // className: `${toastStyle.success}`,
      });
    }

    const response = await auth.login(email, password);

    if (response.success) {
      toast.success("Loged in successfully! ", {
        position: toast.POSITION.TOP_RIGHT,
        // className: `${toastStyle.success}`,
      });
      history("/");
    } else {
      toast.error("Soting Wrong! ", {
        position: toast.POSITION.TOP_RIGHT,
        // className: `${toastStyle.success}`,
      });
    }

    setLoggingIn(false);
  };

  const handleGuest = (e) => {
    setEmail("guest@gmail.com");
    setPassword("Guest@1234");
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loggingIn}>
            {loggingIn ? "Logging in..." : "Log In"}
          </button>
        </form>
        <button onClick={handleGuest}>Log In as a Guest</button>
        <br />
        <br />
        <p>
          <Link to="">Forgotten Password?</Link>
        </p>

        <br />
        <hr />
        <br />
        <p>oR</p>
        <br />

        <div onClick={() => goToSignup()}>
          <button>Create a new account !</button>
          {/* <ToastContainer /> */}
        </div>

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
