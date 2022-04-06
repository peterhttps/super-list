import React, { useState, useEffect } from "react";
import { useFavorites, useList, userUsers } from "hooks";

import CardList from "../CardList";
import { ListWrapper } from "./styles";
import { getListItems } from "./helper";

interface IProps {
  isFavorites: boolean;
}

const List: React.FC<IProps> = ({ isFavorites = false }: IProps) => {
  const { currentList } = useList();
  const { favorites } = useFavorites();
  const { currentUser } = userUsers();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getListItems(setIsLoading);
  }, []);

  if (isLoading) return <div />;

  if (isFavorites) {
    return (
      <ListWrapper>
        {favorites
          .find((favorite) => favorite.userEmail === currentUser.email)
          ?.favorites.map((item) => (
            <CardList key={item.id} item={item} />
          ))}
      </ListWrapper>
    );
  }

  return (
    <ListWrapper>
      {currentList.map((item) => (
        <CardList key={item.id} item={item} />
      ))}
    </ListWrapper>
  );
};

export default List;
