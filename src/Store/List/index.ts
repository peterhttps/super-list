import IItem from "interfaces/IItem";
import { Store } from "pullstate";
import { getFromStorageArray, getFromStorageValue } from "utils/storage";

interface IProps {
  currentList: IItem[];
  currentPagination: number;
}

export const ListStore = new Store<IProps>({
  currentList: getFromStorageArray("@currentList"),
  currentPagination: getFromStorageValue("@pagination"),
});
