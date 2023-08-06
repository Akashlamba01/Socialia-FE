import React from "react";
import styles from "../styles/navbar.module.css";
import useWindowSize from "../utils/useWindowSize";
import { Link } from "react-router-dom";

const Navbar = () => {
  const size = useWindowSize();

  const toggleSettingBtn = () => {
    console.log("helo");
  };

  return (
    <header className={styles.header}>
      <div className={styles.headingSection}>
        <Link to="">
          <h1 className={styles.heading}>Socialia</h1>
        </Link>

        <div>
          <div onClick={() => toggleSettingBtn()} className={styles.show}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className={styles.profileSettingToggle} id="profile-setting">
            <div onClick={() => toggleSettingBtn()}>
              <Link> cencel </Link>
            </div>
            <div>
              <Link to="">profile</Link>
            </div>
            <div>
              <Link to="">update profile</Link>
            </div>
            <div>
              <Link to="">settings</Link>
            </div>
            <div>
              <Link to="">logout</Link>
            </div>
          </div>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/" className="activate">
              <i className="fa-solid fa-house "></i>
            </Link>
          </li>

          <li>
            <Link to="./friends">
              <i className="fa-solid fa-user-group"></i>
            </Link>
          </li>

          {size.width < 1200 && (
            <li>
              <Link to="">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </li>
          )}
          {size.width < 1200 && (
            <li>
              <Link to="./message.html">
                <i className="fa-solid fa-message"></i>
              </Link>
            </li>
          )}

          <li>
            <Link to="/notifications">
              <i className="fa-solid fa-bell"></i>
            </Link>
          </li>
          <li className="login">
            <Link to="/profile">
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
