import { useEffect, useState } from "react";
// import { getPosts } from "../api";
import {
  Home,
  FriendsPage,
  MessagesPage,
  NotificationsPage,
  ProfilePage,
  LoginPage,
  SignupPage,
  ForgetPasswordPage,
} from "../pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./index";
import Loading from "./Loading";
import { useAuth } from "../hooks";
import { getItemInLocalStorage } from "../utils";
import OTPverify from "./OTPverify";

function App() {
  const auth = useAuth();

  if (auth.loading) {
    return <Loading />;
  }
  const logedIn = getItemInLocalStorage("access_token");

  // const history = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <BrowserRouter>
      {logedIn ? <Navbar /> : ""}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        <Route path="/otp-verify" element={<OTPverify />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
