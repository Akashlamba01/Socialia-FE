import { useEffect, useState } from "react";
import { getPosts } from "../api";
import {
  Home,
  FriendsPage,
  MessagesPage,
  NotificationsPage,
  ProfilePage,
  LoginPage,
} from "../pages";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";
import { Navbar } from "./index";
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

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  // const logedIn = false;
  // if (!logedIn) {
  //   console.log("jjjjjjjjjjjjjjjjjjjjjj");
  //   history.push("/login");
  // }
  // history.push("/login");

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>

        <Route path="/friends">
          <FriendsPage />
        </Route>
        <Route path="/notifications">
          <NotificationsPage />
        </Route>
        <Route path="/messages">
          <MessagesPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>

        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Switch>
    </Router>
  );
}

export default App;
