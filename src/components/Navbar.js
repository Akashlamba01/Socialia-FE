import React from "react";
import styles from "../styles/navbar.module.css";
import useWindowSize from "../utils/useWindowSize";

const Navbar = () => {
  const size = useWindowSize();

  const toggleSettingBtn = () => {
    console.log("helo");
  };

  return (
    <header className={styles.header}>
      <div className={styles.headingSection}>
        <a href="">
          <h1 className={styles.heading}>Socialia</h1>
        </a>

        <div>
          <div onClick={() => toggleSettingBtn()} className={styles.show}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className={styles.profileSettingToggle} id="profile-setting">
            <div onClick={() => toggleSettingBtn()}>
              <a> cencel </a>
            </div>
            <div>
              <a href="">profile</a>
            </div>
            <div>
              <a href="">update profile</a>
            </div>
            <div>
              <a href="">settings</a>
            </div>
            <div>
              <a href="">logout</a>
            </div>
          </div>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <a href="/" className="activate">
              <i className="fa-solid fa-house "></i>
            </a>
          </li>

          <li>
            <a href="./friends">
              <i className="fa-solid fa-user-group"></i>
            </a>
          </li>

          {size.width < 1200 && (
            <li>
              <a href="">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
          )}
          {size.width < 1200 && (
            <li>
              <a href="./message.html">
                <i className="fa-solid fa-message"></i>
              </a>
            </li>
          )}

          <li>
            <a href="/notifications">
              <i className="fa-solid fa-bell"></i>
            </a>
          </li>
          <li className="login">
            <a href="/profile">
              <i className="fa-solid fa-user"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
