import axios, { AxiosResponse } from "axios";
import IItem from "interfaces/IItem";

const getClothes = (): Promise<AxiosResponse<IItem[]>> => {
  return axios.get("http://localhost:3333/items");
};

const getCars = (): Promise<AxiosResponse<IItem[]>> => {
  return axios.get("http://localhost:3334/items");
};

const getFoods = (): Promise<AxiosResponse<IItem[]>> => {
  return axios.get("http://localhost:3335/items");
};

const getAllItems = () => {
  const url1 = getClothes();
  const url2 = getCars();
  const url3 = getFoods();

  return Promise.all([url1, url2, url3]);
};

export default { getAllItems, getClothes, getCars, getFoods };
