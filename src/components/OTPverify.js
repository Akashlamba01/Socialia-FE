import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import toastStyle from "../styles/toast.module.css";
import styles from "../styles/login.module.css";

import toast, { Toaster } from "react-hot-toast";
import { getItemInLocalStorage, removeItemInLocalStorage } from "../utils";
import { otpVerify } from "../api";
import { useAuth } from "../hooks";

const OTPverify = () => {
  const [otp, setOtp] = useState(894783);
  const [loggingIn, setLoggingIn] = useState(false);

  const email = getItemInLocalStorage("userEmail");
  const history = useNavigate();

  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoggingIn(true);
    auth.loading = true;

    if (!otp) {
      toast.error("Otp not Found!", {
        duration: 4000,
        position: "top-right",
      });
    }

    const response = await otpVerify(email, otp);

    if (response.success) {
      toast.success("User Registered successfully!", {
        duration: 4000,
        position: "top-right",
      });
      removeItemInLocalStorage("userEmail");
      history("/login");
    } else {
      // console.log(response);
      toast.error(response.message, {
        duration: 4000,
        position: "top-right",
      });
    }

    auth.loading = false;
    setLoggingIn(false);
  };

  return (
    <div>
      <div className={styles.heading}>
        <h2>Socialia</h2>
      </div>
      <div className={styles.loginSection}>
        <h3 style={{ color: "gray", marginBottom: "8px" }}>OTP Verify</h3>
        <form id="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            disabled
            style={{ backgroundColor: "white" }}
          />

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button type="submit" disabled={loggingIn}>
            Verify OTP!
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
    </div>
  );
};

export default OTPverify;
