import axios, { AxiosResponse } from "axios";
import IItem from "interfaces/IItem";

const getClothes = (): Promise<AxiosResponse<IItem[]>> => {
  return axios.get("https://super-api-clothes.herokuapp.com/items");
};

const getCars = (): Promise<AxiosResponse<IItem[]>> => {
  return axios.get("https://super-api-cars.herokuapp.com/items");
};

const getFoods = (): Promise<AxiosResponse<IItem[]>> => {
  return axios.get("https://super-api-foods.herokuapp.com/items");
};

const getAllItems = () => {
  const url1 = getClothes();
  const url2 = getCars();
  const url3 = getFoods();

  return Promise.all([url1, url2, url3]);
};

export default { getAllItems, getClothes, getCars, getFoods };
