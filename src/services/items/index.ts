import axios, { AxiosResponse } from "axios";
import IItem from "interfaces/IItem";

const getClothes = (): Promise<AxiosResponse<IItem[]>> => {
  return axios.get(process.env.URL_1 || "");
};

const getCars = (): Promise<AxiosResponse<IItem[]>> => {
  return axios.get(process.env.ULR_2 || "");
};

const getFoods = (): Promise<AxiosResponse<IItem[]>> => {
  return axios.get(process.env.ULR_3 || "");
};

const getAllItems = () => {
  const url1 = getClothes();
  const url2 = getCars();
  const url3 = getFoods();

  return Promise.all([url1, url2, url3]);
};

export default { getAllItems, getClothes, getCars, getFoods };
