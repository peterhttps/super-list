import React from "react";
import IItem from "interfaces/IItem";

import { CardImage, CardTitle, CardWrapper, FavoriteButton } from "./styles";

interface IProps {
  item: IItem;
}

const CardList: React.FC<IProps> = ({ item }: IProps) => {
  return (
    <CardWrapper>
      <CardImage src={item.image} alt={item.name} />
      <CardTitle>{item.name}</CardTitle>
      <FavoriteButton>Adicionar aos favoritos</FavoriteButton>
    </CardWrapper>
  );
};

export default CardList;
