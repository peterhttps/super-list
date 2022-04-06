import IAccount from "interfaces/IAccount";
import { Store } from "pullstate";
import { getFromStorage } from "utils/storage";

interface IProps {
  accounts: IAccount[];
  isAuthenticated: boolean;
  currentUser: IAccount;
}

export const UserStore = new Store<IProps>({
  accounts: getFromStorage("@session").accounts || [],
  isAuthenticated: getFromStorage("@session").isAuthenticated || false,
  currentUser: getFromStorage("@session").currentUser || {
    email: "",
    password: "",
    name: "",
  },
});
