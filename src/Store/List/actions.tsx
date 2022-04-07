import IItem from "interfaces/IItem";
import { saveOnStorage } from "utils/storage";
import { ListStore } from ".";

export const addPagination = () =>
  ListStore.update((s) => {
    s.currentPagination += 1;
    saveOnStorage("@pagination", s.currentPagination);
  });

export const removePagination = () =>
  ListStore.update((s) => {
    s.currentPagination -= 1;
    saveOnStorage("@pagination", s.currentPagination);
  });

export const setCurrentPagination = (value: number) =>
  ListStore.update((s) => {
    s.currentPagination = value;
    saveOnStorage("@pagination", s.currentPagination);
  });

export const setCurrentList = (value: IItem[]) =>
  ListStore.update((s) => {
    s.currentList = value;
    saveOnStorage("@currentList", s.currentList);
  });

export const setCurrentSearch = (value: string) =>
  ListStore.update((s) => {
    s.currentSearch = value;
    saveOnStorage("@currentSearch", s.currentSearch);
  });
