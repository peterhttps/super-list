import IAccount from "interfaces/IAccount";
import {
  addUser,
  setCurrentUser,
  setIsAuthenticated,
} from "store/user/actions";
import { editFromStorage, getFromStorage } from "./storage";

export const loginSession = (user: IAccount) => {
  setIsAuthenticated(true);
  setCurrentUser(user);
  editFromStorage("@session", {
    isAuthenticated: true,
    currentUser: {
      email: user.email,
      name: user.name,
      password: user.password,
    },
  });
};

export const logoutSession = () => {
  setIsAuthenticated(false);
  setCurrentUser({ email: "", password: "", name: "" });
  editFromStorage("@session", {
    isAuthenticated: false,
    currentUser: {
      email: "",
      name: "",
      password: "",
    },
  });
};

export const registerSession = (user: IAccount, accounts: IAccount[]) => {
  addUser({ email: user.email, name: user.name, password: user.password });
  setIsAuthenticated(true);
  setCurrentUser({
    email: user.email,
    name: user.name,
    password: user.password,
  });

  const newAccounts = accounts;
  newAccounts.push(user);
  editFromStorage("@session", {
    isAuthenticated: true,
    currentUser: {
      email: user.email,
      name: user.name,
      password: user.password,
    },
    accounts: newAccounts,
  });
};
