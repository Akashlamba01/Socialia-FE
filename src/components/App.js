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
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import { Navbar, Signup } from "./index";
import Loading from "./Loading";

function App() {
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await getPosts();
  //     console.log('response', response);
  //   };

  //   fetchPosts();
  // }, []);

  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);
  const [loading, setLoading] = useState(true);

  // const history = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  // const logedIn = true;
  // if (!logedIn) {
  //   // console.log("jjjjjjjjjjjjjjjjjjjjjj");
  //   history("/login");
  // }
  // history.push("/login");

  return (
    <BrowserRouter>
      {/* {logedIn ? ( */}
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/signup" element={<SignupPage />} /> */}
        </Routes>
      </>
      {/* ) : ( */}
      <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </>
      {/* )} */}
    </BrowserRouter>
  );
}

export default App;
