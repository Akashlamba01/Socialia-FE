import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import toastStyle from "../styles/toast.module.css";
import styles from "../styles/login.module.css";

import toast, { Toaster } from "react-hot-toast";
import {
  getItemInLocalStorage,
  removeItemInLocalStorage,
  setItemInLocalStorage,
} from "../utils";
import { forgetPassword, sendOtp } from "../api";
import { useAuth } from "../hooks";

const ForgetPassword = () => {
  // const userEmail = getItemInLocalStorage("userEmail");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [togel, setTogel] = useState(false);

  const [signingUp, setSigningUp] = useState(false);

  // const email = userEmail;
  const history = useNavigate();

  const handleTogel = () => {
    if (togel) {
      setTogel(false);
    } else setTogel(true);
  };

  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSigningUp(true);
    auth.loading = true;

    if (!email) {
      toast.error("Email not Found!", {
        duration: 4000,
        position: "top-right",
      });
    }

    // const response = await auth.login(email, otp);
    // const response = await otp(email, otp)
    let response = await sendOtp(email);

    if (response.success) {
      // console.log("jkjkjkjkjk");
      // console.log(response);
      toast.success(response.message, {
        duration: 4000,
        position: "top-right",
      });
      setItemInLocalStorage("userEmail", email);
      history("/otp-verify");
    } else {
      // console.log(response);
      toast.error(response.message, {
        duration: 4000,
        position: "top-right",
      });
    }

    auth.loading = false;
    setSigningUp(false);
  };

  return (
    <div>
      <div className={styles.heading}>
        <h2>Socialia</h2>
      </div>
      <div className={styles.loginSection}>
        <h3 style={{ color: "gray", marginBottom: "8px" }}>Forget Password</h3>
        <form id="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            // disabled
            onChange={(e) => setEmail(e.target.value)}
            style={{ backgroundColor: "white" }}
          />

          <button type="submit" disabled={signingUp}>
            <Toaster />
            Send OTP!
          </button>
        </form>

        <br />

        <hr />
        <br />
        <p>oR</p>
        <br />

        <div>
          <Link to="/login">
            <button>Already have an account !</button>
          </Link>
          <Toaster />
        </div>

        <div>
          <Link to="/signup">
            <button>Create a new account !</button>
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

export default ForgetPassword;
