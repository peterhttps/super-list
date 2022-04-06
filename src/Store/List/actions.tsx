import IItem from "interfaces/IItem";
import { ListStore } from ".";

export const addPagination = () =>
  ListStore.update((s) => {
    s.currentPagination += 1;
  });

export const removePagination = () =>
  ListStore.update((s) => {
    s.currentPagination -= 1;
  });

export const setCurrentList = (value: IItem[]) =>
  ListStore.update((s) => {
    s.currentList = value;
  });
