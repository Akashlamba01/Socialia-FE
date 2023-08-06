import React from "react";
import { Link } from "react-router-dom";

const Signup = ({ styles }) => {
  return (
    <div>
      <div className={styles.heading}>
        <h2>Socialia</h2>
      </div>

      <div className={styles.loginSection}>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          {/* <!-- <input type="text" placeholder="Phone" required /> --> */}
          <input type="date" id="birthdate" placeholder="date" required />
          <input type="password" placeholder="Password" required />
          <input type="c_password" placeholder="Confirm Password" required />
          <button type="submit" id="submitBtn">
            Sign Up
          </button>
        </form>

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
