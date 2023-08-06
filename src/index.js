import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./styles/index.css";
import { App } from "./components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext, AuthFun, AuthProvider } from "./providers/AuthProvider";
import { useProvideAuth } from "./hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));

const data = {
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
};

// const authFun = () => {
//   const auth = useProvideAuth();
// };

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
