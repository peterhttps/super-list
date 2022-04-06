import IAccount from "interfaces/IAccount";
import { Store } from "pullstate";

interface IProps {
  accounts: IAccount[];
}

export const UserStore = new Store<IProps>({
  accounts: [],
});
