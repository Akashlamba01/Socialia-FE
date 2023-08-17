import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import toastStyle from "../styles/toast.module.css";
import { useAuth, useProvideAuth } from "../hooks";
import axios from "axios";

import toast, { Toaster } from "react-hot-toast";
import { sendMsg } from "../api";

const Login = ({ styles }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [togel, setTogel] = useState(false);

  const history = useNavigate();

  const auth = useAuth();
  console.log(auth);

  const showToastMessage = () => {
    // console.log("jjjj");
    // toast.success("Error ", {
    //   position: toast.POSITION.TOP_RIGHT,
    //   className: `${toastStyle.success}`,
    // });
  };

  const handleTogel = () => {
    if (togel) {
      setTogel(false);
    } else setTogel(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoggingIn(true);

    if (!email || !password) {
      toast.error("All Fields are Required!", {
        duration: 4000,
        position: "top-right",
      });
    }

    const response = await auth.login(email, password);

    if (response.success) {
      console.log("jkjkjkjkjk");

      toast.success(response.message, {
        duration: 4000,
        position: "top-right",
      });
      history("/");
    } else {
      toast.error(response.message, {
        duration: 4000,
        position: "top-right",
      });
    }

    setLoggingIn(false);
  };

  const handleGuest = async (e) => {
    setEmail("guest@gmail.com");
    setPassword("Guest@1234");
    // await sendMsg("hi, there!", 7037585801)
    //   .then((result) => {
    //     console.log(result);
    //     return;
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  // const sendMessage = async (msg, phone, callbackFunc) => {
  //   const params = new URLSearchParams();
  //   params.append("destination", phone);
  //   params.append("message", msg);
  //   params.append("source", "GSDSMS"); //Required only for india

  //   const config = {
  //     headers: {
  //       apikey: "dapbkp5jg0dcxcxju3udhzwfodma9ela",
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //   };

  //   await axios
  //     .post(
  //       "http://api.gupshup.io/sms/v1/message/e8e88cae-8226-4526-a537-fa35c285a747",
  //       params,
  //       config
  //     )
  //     .then((result) => {
  //       console.log("Message sent");
  //       console.log(result);
  //       callbackFunc(result.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       callbackFunc(err);
  //     });
  // };

  // sendMessage("hi, there!", 9719343347);

  return (
    <div>
      <div className={styles.heading}>
        {/* <!-- <h2>Connectopia</h2>
      <h2>SocialSphere</h2> --> */}
        <h2>Socialia</h2>
      </div>
      <div className={styles.loginSection}>
        <h3 style={{ color: "gray", marginBottom: "8px" }}>Login</h3>

        <form id="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div>
            <input
              type={togel ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              value={password}
              // required
            />
            <small
              onClick={() => handleTogel()}
              className={styles.hideAndShowPass}>
              {togel ? (
                <i class="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </small>
          </div>
          <button type="submit" disabled={loggingIn}>
            {loggingIn ? "Logging in..." : "Log In"}
          </button>
        </form>
        <button onClick={handleGuest}>Log In as a Guest</button>
        {/* <button onClick={sendMessage}>Log In as a Guest</button> */}
        <br />
        <br />
        <p>
          <Link to="/forget-password">Forgotten Password?</Link>
        </p>

        <br />
        <hr />
        <br />
        <p>oR</p>
        <br />

        <div>
          <Link to="/signup">
            <button>Create a new account !</button>
            <Toaster />
          </Link>
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
