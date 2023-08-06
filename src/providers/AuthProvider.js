import { createContext } from "react";
import { useProvideAuth } from "../hooks";
import { App } from "../components";

const initialState = {
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ childern }) => {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      <App />
    </AuthContext.Provider>
  );
};
