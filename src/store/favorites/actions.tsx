import IFavorites from "interfaces/IFavorites";
import IItem from "interfaces/IItem";
import { saveOnStorage } from "utils/storage";
import { FavoritesStore } from ".";

export const addFavorite = (userEmail: string, item: IItem) =>
  FavoritesStore.update((s) => {
    s.favorites.forEach((favorite) => {
      if (userEmail === favorite.userEmail) {
        favorite.favorites.push(item);
      }
    });
    saveOnStorage("@favorites", s.favorites);
  });

export const removeFavorite = (userEmail: string, item: IItem) =>
  FavoritesStore.update((s) => {
    s.favorites.forEach((favorite) => {
      if (userEmail === favorite.userEmail) {
        const newFavorites = favorite.favorites.filter(
          (itemFav) => itemFav.name !== item.name
        );
        favorite.favorites = newFavorites;
      }
    });
    saveOnStorage("@favorites", s.favorites);
  });

export const setFavorites = (value: IFavorites[]) =>
  FavoritesStore.update((s) => {
    s.favorites = value;
  });
