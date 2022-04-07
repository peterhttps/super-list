import IItem from "interfaces/IItem";
import { Store } from "pullstate";
import { getFromStorageArray, getFromStorageValue } from "utils/storage";

interface IProps {
  currentList: IItem[];
  currentPagination: number;
  currentSearch: string;
}

export const ListStore = new Store<IProps>({
  currentList: getFromStorageArray("@currentList"),
  currentPagination: getFromStorageValue("@pagination"),
  currentSearch: getFromStorageValue("@currentSearch"),
});
