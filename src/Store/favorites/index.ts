import { Store } from "pullstate";
import IFavorites from "interfaces/IFavorites";
import { getFromStorageArray } from "utils/storage";

interface IProps {
  favorites: IFavorites[];
}

export const FavoritesStore = new Store<IProps>({
  favorites: getFromStorageArray("@favorites") || [],
});
