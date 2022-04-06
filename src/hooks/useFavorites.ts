import { FavoritesStore } from "store/favorites";

const useFavorites = () => FavoritesStore.useState((s) => s);

export { useFavorites };
