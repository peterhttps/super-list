import React from "react";
import IItem from "interfaces/IItem";
import { userUsers } from "hooks";

import { CardImage, CardTitle, CardWrapper, FavoriteButton } from "./styles";

interface IProps {
  item: IItem;
}

const CardList: React.FC<IProps> = ({ item }: IProps) => {
  const { isAuthenticated } = userUsers();

  return (
    <CardWrapper>
      <CardImage src={item.image} alt={item.name} />
      <CardTitle>{item.name}</CardTitle>
      {isAuthenticated && (
        <FavoriteButton>Adicionar aos favoritos</FavoriteButton>
      )}
    </CardWrapper>
  );
};

export default CardList;
