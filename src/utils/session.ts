import IAccount from "interfaces/IAccount";
import { setCurrentUser, setIsAuthenticated } from "store/user/actions";

export const loginSession = (user: IAccount) => {
  setIsAuthenticated(true);
  setCurrentUser(user);
};

export const logoutSession = () => {
  setIsAuthenticated(false);
  setCurrentUser({ email: "", password: "", name: "" });
};
