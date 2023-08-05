import React from "react";
import styles from "../styles/index.module.css";
import { Friends, Posts, Messages } from "../components/index";
// import Navbar from "../components/Navbar";

import useWindowSize from "../utils/useWindowSize";

export const Home = () => {
  const size = useWindowSize();

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
