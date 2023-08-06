import React, { useEffect } from "react";
import styles from "../styles/index.module.css";
import { Friends, Posts, Messages } from "../components/index";
// import Navbar from "../components/Navbar";

import useWindowSize from "../utils/useWindowSize";
import { getUser } from "../api";

export const Home = () => {
  const size = useWindowSize();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await getUser();
  //     console.log(response);
  //   };

  //   fetchUser();
  // }, []);

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
