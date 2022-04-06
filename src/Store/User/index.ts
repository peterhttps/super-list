import IAccount from "interfaces/IAccount";
import { Store } from "pullstate";

interface IProps {
  accounts: IAccount[];
  isAuthenticated: boolean;
  currentUser: IAccount;
}

export const UserStore = new Store<IProps>({
  accounts: [],
  isAuthenticated: false,
  currentUser: {
    email: "",
    password: "",
    name: "",
  },
});
