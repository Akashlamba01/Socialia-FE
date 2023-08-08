import React from "react";
import styles from "../styles/navbar.module.css";
import useWindowSize from "../utils/useWindowSize";
import { Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { useAuth } from "../hooks";
import { toast } from "react-toastify";
// import "reactjs-popup/dist/index.css";

const Navbar = () => {
  const size = useWindowSize();
  const history = useNavigate();

  const auth = useAuth();

  const toggleSettingBtn = () => {
    console.log("helo");
  };

  const userLogout = async () => {
    console.log("jjjjj");
    const response = await auth.logout();

    if (response.success) {
      toast.success("Loged in successfully! ", {
        position: toast.POSITION.TOP_RIGHT,
        // className: `${toastStyle.success}`,
      });
      history("/login");
    } else {
      console.log("jjjjjjjjjjjjjjjjjj");
      toast.error("Soting Wrong! ", {
        position: toast.POSITION.TOP_RIGHT,
        // className: `${toastStyle.success}`,
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headingSection}>
        <Link to="">
          <h1 className={styles.heading}>Socialia</h1>
        </Link>

        <div>
          <Popup
            trigger={
              <div className={styles.show}>
                <i className="fa-solid fa-bars"></i>
              </div>
            }
            position={"bottom"}>
            <div className={styles.profileSettingToggle}>
              <div>
                <Link style={{ color: "black" }}> cencel </Link>
              </div>
              <div>
                <Link to="" style={{ color: "black" }}>
                  profile
                </Link>
              </div>
              <div>
                <Link to="" style={{ color: "black" }}>
                  update profile
                </Link>
              </div>
              <div>
                <Link to="" style={{ color: "black" }}>
                  settings
                </Link>
              </div>
              <div>
                <Link onClick={() => userLogout()} style={{ color: "black" }}>
                  logout
                </Link>
              </div>
            </div>
          </Popup>
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
