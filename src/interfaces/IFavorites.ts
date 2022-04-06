import IItem from "./IItem";

export default interface IFavorites {
  userEmail: string;
  favorites: IItem[];
}
