import { AxiosResponse } from "axios";
import IItem from "interfaces/IItem";
import api from "services/api";

const getAllItems = (): Promise<AxiosResponse<IItem[]>> => {
  return api.get("/clothes");
};

export default { getAllItems };
