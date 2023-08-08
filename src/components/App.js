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
} from "../pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./index";
import Loading from "./Loading";
import { useAuth } from "../hooks";
import { getItemInLocalStorage } from "../utils";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
