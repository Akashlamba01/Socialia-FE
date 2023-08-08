import { useEffect } from "react";
import { Loading, Login } from "../components";
import styles from "../styles/login.module.css";
import { getItemInLocalStorage } from "../utils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";

const LoginPage = () => {
  const history = useNavigate();

  const auth = useAuth();

  useEffect(() => {
    const token = getItemInLocalStorage("access_token");
    if (token) {
      history("/");
    }
  }, []);

  return <Login styles={styles} />;
};

export default LoginPage;
