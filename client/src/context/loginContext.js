import { createContext } from "react";

function noop() {}

export const LoginContext = createContext({
  token: null,
  userId: null,
  login: noop,
  logOut: noop,
  isLogined: false,
});
