import React, { useState, useEffect } from "react";
import { useFavorites, useList, userUsers } from "hooks";
import { useLocation, useParams } from "react-router-dom";
import IItem from "interfaces/IItem";
import CardList from "../CardList";
import Pagination from "./Pagination";
import { getSourceType } from "./helper";

import { ListContainer, ListWrapper } from "./styles";

interface IProps {
  isFavorites: boolean;
}

const List: React.FC<IProps> = ({ isFavorites = false }: IProps) => {
  const { currentList, currentPagination } = useList();
  const { id } = useParams();
  const { favorites } = useFavorites();
  const { currentUser } = userUsers();
  const location = useLocation();
  const [listSource, setListSource] = useState<IItem[]>([]);
  const [favoritesSource, setFavoritesSource] = useState<IItem[] | undefined>(
    favorites.find((favorite) => favorite.userEmail === currentUser.email)
      ?.favorites
  );

  useEffect(() => {
    getSourceType(
      currentPagination,
      location,
      setListSource,
      id,
      isFavorites,
      currentList,
      favoritesSource,
      setFavoritesSource
    );
  }, [location.pathname, currentList]);

  if (isFavorites) {
    return (
      <ListWrapper>
        <ListContainer>
          {favoritesSource?.map((item) => (
            <CardList key={item.id} item={item} />
          ))}
        </ListContainer>
      </ListWrapper>
    );
  }

  return (
    <ListWrapper>
      <ListContainer>
        {listSource.map((item) => (
          <CardList key={item.id} item={item} />
        ))}
      </ListContainer>
      <Pagination
        listSource={currentList}
        currentPagination={currentPagination}
        setListSource={setListSource}
      />
    </ListWrapper>
  );
};

export default List;
