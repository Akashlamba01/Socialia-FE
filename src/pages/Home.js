import React, { useEffect } from "react";
import styles from "../styles/index.module.css";
import { Friends, Posts, Messages, Loading } from "../components/index";
// import Navbar from "../components/Navbar";

import useWindowSize from "../utils/useWindowSize";
import { getItemInLocalStorage } from "../utils";
import { useAuth } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Home = () => {
  const size = useWindowSize();
  const [loading, setLoading] = useState(true);
  // getItemInLocalStorage("token")
  const auth = useAuth();
  const history = useNavigate();

  useEffect(() => {
    const token = getItemInLocalStorage("access_token");
    if (!token) {
      history("/login");
    }

    console.log(auth.user);

    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.mainContainer}>
      {size.width >= 1200 && (
        <Friends className={styles.friendMessageContainer} styles={styles} />
      )}
      <Posts styles={styles} />
      <Toaster />
      {size.width >= 1200 && (
        <Messages className={styles.friendMessageContainer} styles={styles} />
      )}
    </div>
  );
};

export default Home;
