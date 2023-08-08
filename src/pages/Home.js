import React, { useEffect } from "react";
import styles from "../styles/index.module.css";
import { Friends, Posts, Messages } from "../components/index";
// import Navbar from "../components/Navbar";

import useWindowSize from "../utils/useWindowSize";
import { getItemInLocalStorage } from "../utils";
import { useAuth } from "../hooks";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const size = useWindowSize();
  // getItemInLocalStorage("token")
  // const auth = useAuth();
  const history = useNavigate();

  useEffect(() => {
    const token = getItemInLocalStorage("access_token");
    if (!token) {
      history("/login");
    }
  }, []);

  return (
    <div className={styles.mainContainer}>
      {size.width >= 1200 && (
        <Friends className={styles.friendMessageContainer} styles={styles} />
      )}
      <Posts styles={styles} />
      {size.width >= 1200 && (
        <Messages className={styles.friendMessageContainer} styles={styles} />
      )}
    </div>
  );
};

export default Home;
