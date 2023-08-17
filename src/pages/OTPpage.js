import { useEffect } from "react";
import { Loading, Login } from "../components";
import { getItemInLocalStorage } from "../utils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { useState } from "react";
import { OTPverify } from "../components";
// import { Loading } from "../components";

const OTPpage = () => {
  const history = useNavigate();
  const [loading, setLoading] = useState(true);

  const auth = useAuth();

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

  return <OTPverify />;
};

export default OTPpage;
