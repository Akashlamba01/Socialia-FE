import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { signup } from "../api";

import toast, { Toaster } from "react-hot-toast";
import { setItemInLocalStorage } from "../utils";

const Signup = ({ styles }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [fullName, setFullName] = useState("");

  const [togel, setTogel] = useState(false);
  const [signingUp, setSigningUp] = useState(false);

  const auth = useAuth();

  const history = useNavigate();

  const handleTogel = () => {
    if (togel) {
      setTogel(false);
    } else setTogel(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSigningUp(true);

    if (!email || !password || !confirmPassword || !city || !fullName) {
      toast.error("All Fields are Required!", {
        duration: 4000,
        position: "top-right",
      });
    }

    // const userObj = [email, password, confirmPassword, city, fullName];

    auth.loading = true;

    const response = await signup(
      email,
      password,
      confirmPassword,
      city,
      fullName
    );

    if (response.success) {
      setItemInLocalStorage("userEmail", email);
      // toast.success("User Registerd in successfully!", {
      //   duration: 4000,
      //   position: "top-right",
      // });
      history("/otp-verify");
    } else {
      console.log(response);
      toast.error(response.message, {
        duration: 4000,
        position: "top-right",
      });
    }

    setSigningUp(false);
    auth.loading = false;
  };

  return (
    <div>
      <div className={styles.heading}>
        <h2>Socialia</h2>
      </div>

      <div className={styles.loginSection}>
        <h3 style={{ color: "gray", marginBottom: "8px" }}>Sign up</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Name"
            // required
          />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            // required
          />
          {/* <!-- <input type="text" placeholder="Phone" required /> --> */}
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            id="birthdate"
            placeholder="city"
            // required
          />
          <div>
            <input
              type={togel ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              // value={password}
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
          <input
            type={togel ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            // required
          />
          <button type="submit" disabled={signingUp}>
            Sign up!
            <Toaster />
          </button>
        </form>
        <br />
        <p>
          <Link to="/forget-password">Forgotten Password?</Link>
        </p>

        <br />

        <hr />
        <br />
        <p>oR</p>
        <br />

        <Link to="/login">
          <button>Already have an account !</button>
        </Link>

        <Link to="">
          <button className={styles.googleLoginBtn}>
            <i className="fa-brands fa-google"></i> login with google
          </button>
        </Link>
      </div>

      {/* <script src="./js/signup.js">

      console.log('kjjk')
      document.getElementById("submitBtn").addEventListener("click", validateAge);
    </script> */}
    </div>
  );
};

export default Signup;
