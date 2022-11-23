import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import useRoutes from "./routes";
import { useLogin } from "./hooks/login.hook";
import { LoginContext } from "./context/loginContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { token, login, logOut, userId } = useLogin();
  const isLogined = !!token;
  const routes = useRoutes(isLogined);
  return (
    <LoginContext.Provider
      value={{
        token: token,
        login,
        logOut,
        userId,
        isLogined,
      }}
    >
      <Router>{routes}</Router>;
    </LoginContext.Provider>
  );
}

export default App;
