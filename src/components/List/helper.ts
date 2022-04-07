import RouterContants from "constants/routerContants";
import IItem from "interfaces/IItem";
import { Location } from "react-router-dom";
import { itemsService } from "services";
import { setCurrentList, setCurrentPagination } from "../../store/list/actions";

export const reorganizeItems = (
  currentList: IItem[],
  currentPagination: number,
  setListSource: React.Dispatch<React.SetStateAction<IItem[]>>
) => {
  if (currentPagination === 0) {
    setListSource(currentList.slice(0, 9));
    return;
  }

  setListSource(
    currentList.slice(10 * currentPagination + 1, 10 * (currentPagination + 1))
  );
};

export const getListItems = async (
  currentPagination: number,
  setListSource: React.Dispatch<React.SetStateAction<IItem[]>>,
  id: string | undefined
) => {
  const items = await itemsService.getAllItems();
  let finalItems = [...items[0].data, ...items[1].data, ...items[2].data];
  finalItems.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  if (id) {
    finalItems = finalItems.filter((item) =>
      item.name.toLowerCase().startsWith(id.toLowerCase())
    );
  }

  setCurrentList(finalItems);
  reorganizeItems(finalItems, currentPagination, setListSource);
  localStorage.setItem("@actualPath", RouterContants.ALL);
};

export const getSpecificItems = async (
  currentPagination: number,
  setListSource: React.Dispatch<React.SetStateAction<IItem[]>>,
  route: string,
  id: string | undefined
) => {
  let items: IItem[] = [];

  if (route === RouterContants.CARS) {
    const reqItems = await itemsService.getCars();
    items = reqItems.data;
    localStorage.setItem("@actualPath", RouterContants.CARS);
  } else if (route === RouterContants.CLOTHES) {
    const reqItems = await itemsService.getClothes();
    items = reqItems.data;
    localStorage.setItem("@actualPath", RouterContants.CLOTHES);
  } else if (route === RouterContants.FOODS) {
    const reqItems = await itemsService.getFoods();
    items = reqItems.data;
    localStorage.setItem("@actualPath", RouterContants.FOODS);
  }

  let finalItems = items.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  if (id) {
    finalItems = finalItems.filter((item) =>
      item.name.toLowerCase().startsWith(id.toLowerCase())
    );
  }

  setCurrentList(finalItems);
  reorganizeItems(finalItems, currentPagination, setListSource);
};

export const getSourceType = (
  currentPagination: number,
  location: Location,
  setListSource: React.Dispatch<React.SetStateAction<IItem[]>>,
  id: string | undefined,
  isFavorites: boolean,
  currentList: IItem[],
  favoritesSource: IItem[] | undefined,
  setFavoritesSource: React.Dispatch<React.SetStateAction<IItem[] | undefined>>
) => {
  let paginationNumber = currentPagination;
  if (location.pathname !== localStorage.getItem("@actualPath")) {
    paginationNumber = 0;
    setCurrentPagination(0);
  }
  switch (location.pathname) {
    case RouterContants.FAVORITES:
      break;
    case RouterContants.ALL:
      getListItems(paginationNumber, setListSource, id);
      break;
    case RouterContants.CARS:
      getSpecificItems(
        paginationNumber,
        setListSource,
        RouterContants.CARS,
        id
      );
      break;
    case RouterContants.CLOTHES:
      getSpecificItems(
        paginationNumber,
        setListSource,
        RouterContants.CLOTHES,
        id
      );
      break;
    case RouterContants.FOODS:
      getSpecificItems(
        paginationNumber,
        setListSource,
        RouterContants.FOODS,
        id
      );
      break;
    default:
      if (isFavorites) {
        if (id) {
          const favoritesFiltered = favoritesSource?.filter((item) =>
            item.name.toLowerCase().startsWith(id.toLowerCase())
          );
          setFavoritesSource(favoritesFiltered);
        }
      } else if (id) {
        const finalItems = currentList.filter((item) =>
          item.name.toLowerCase().startsWith(id.toLowerCase())
        );
        reorganizeItems(finalItems, paginationNumber, setListSource);
      }
      break;
  }
};
