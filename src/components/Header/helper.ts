import { NavigateFunction } from "react-router-dom";
import { setCurrentSearch } from "store/list/actions";

export const calculateRedirect = (
  searchInput: string,
  navigate: NavigateFunction
) => {
  setCurrentSearch(searchInput);
  if (searchInput.length === 0) {
    localStorage.removeItem("@actualPath");
    navigate("/");
  } else if (localStorage.getItem("@actualPath") === "/favorites") {
    navigate(`search/favorites/${searchInput}`);
  } else {
    navigate(`search/${searchInput}`);
  }
};
