import RouterContants from "constants/routerContants";
import IItem from "interfaces/IItem";
import { itemsService } from "services";
import { setCurrentList } from "../../store/list/actions";

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
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  currentPagination: number,
  setListSource: React.Dispatch<React.SetStateAction<IItem[]>>
) => {
  const items = await itemsService.getAllItems();
  const finalItems = [...items[0].data, ...items[1].data, ...items[2].data];
  finalItems.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  setCurrentList(finalItems);
  reorganizeItems(finalItems, currentPagination, setListSource);
  setIsLoading(false);
  localStorage.setItem("@actualPath", RouterContants.ALL);
};

export const getSpecificItems = async (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  currentPagination: number,
  setListSource: React.Dispatch<React.SetStateAction<IItem[]>>,
  route: string
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

  const finalItems = items.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  setCurrentList(finalItems);
  reorganizeItems(finalItems, currentPagination, setListSource);
  setIsLoading(false);
};
