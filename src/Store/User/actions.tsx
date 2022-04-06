import IAccount from "interfaces/IAccount";
import { UserStore } from ".";

export const addUser = (value: IAccount) =>
  UserStore.update((s) => {
    s.accounts.push(value);
  });

export const setIsAuthenticated = (value: boolean) =>
  UserStore.update((s) => {
    s.isAuthenticated = value;
  });

export const setCurrentUser = (value: IAccount) =>
  UserStore.update((s) => {
    s.currentUser = value;
  });
