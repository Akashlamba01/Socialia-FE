// import React from "react";
import { useState } from "react";
import { Loading, Signup } from "../components";
import styles from "../styles/login.module.css";
import { useNavigate } from "react-router-dom";
import { getItemInLocalStorage } from "../utils";
import { useEffect } from "react";

const SignupPage = () => {
  const [loading, setLoading] = useState(true);
  const history = useNavigate();

  useEffect(() => {
    const token = getItemInLocalStorage("access_token");
    if (token) {
      history("/");
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Signup styles={styles} />;
};

export default SignupPage;
