import { itemsService } from "services";
import { setCurrentList } from "../../store/list/actions";

export const getListItems = async (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const items = await itemsService.getAllItems();
  setCurrentList(items.data);
  setIsLoading(false);
};
