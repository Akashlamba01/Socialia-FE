import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { login as userLogin, logout as userLogout } from "../api";
import {
  getItemInLocalStorage,
  removeItemInLocalStorage,
  setItemInLocalStorage,
} from "../utils";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userToken = getItemInLocalStorage("access_token");

    if (userToken) {
      const user = jwt(userToken);
      console.log(user);

      setUser(user);
    } else {
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await userLogin(email, password);

    if (response.success) {
      // console.log(response);
      setUser(response.data.data.fullName);
      setItemInLocalStorage(
        "access_token",
        response.data.data.accessToken ? response.data.data.accessToken : ""
      );
      setLoading(false);
      return {
        success: true,
      };
    } else {
      setLoading(false);
      return {
        success: false,
        message: response.message,
      };
    }
  };
  const logout = async () => {
    setLoading(true);
    const response = await userLogout();

    if (response.success) {
      console.log(response);
      setUser(null);
      removeItemInLocalStorage("access_token");
      setLoading(false);
      return {
        success: true,
      };
    } else {
      setLoading(false);
      return {
        success: false,
        message: response.message,
      };
    }
  };

  return {
    user,
    login,
    logout,
    loading,
  };
};
