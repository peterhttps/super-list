import IItem from "interfaces/IItem";
import { Store } from "pullstate";

interface IProps {
  currentList: IItem[];
  currentPagination: number;
}

export const ListStore = new Store<IProps>({
  currentList: [],
  currentPagination: 0,
});
