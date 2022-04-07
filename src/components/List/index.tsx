import React, { useState, useEffect } from "react";
import { useFavorites, useList, userUsers } from "hooks";
import { useLocation } from "react-router-dom";
import {
  addPagination,
  removePagination,
  setCurrentPagination,
} from "store/list/actions";
import IItem from "interfaces/IItem";
import CardList from "../CardList";
import RouterContants from "../../constants/routerContants";

import {
  ListContainer,
  ListWrapper,
  PaginationButton,
  PaginationCotainer,
} from "./styles";
import { getListItems, getSpecificItems, reorganizeItems } from "./helper";

interface IProps {
  isFavorites: boolean;
}

const List: React.FC<IProps> = ({ isFavorites = false }: IProps) => {
  const { currentList, currentPagination } = useList();
  const { favorites } = useFavorites();
  const { currentUser } = userUsers();
  const location = useLocation();
  const [listSource, setListSource] = useState<IItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let paginationNumber = currentPagination;
    if (location.pathname !== localStorage.getItem("@actualPath")) {
      paginationNumber = 0;
      setCurrentPagination(0);
    }
    switch (location.pathname) {
      case RouterContants.ALL:
        getListItems(setIsLoading, paginationNumber, setListSource);
        break;
      case RouterContants.CARS:
        getSpecificItems(
          setIsLoading,
          paginationNumber,
          setListSource,
          RouterContants.CARS
        );
        break;
      case RouterContants.CLOTHES:
        getSpecificItems(
          setIsLoading,
          paginationNumber,
          setListSource,
          RouterContants.CLOTHES
        );
        break;
      case RouterContants.FOODS:
        getSpecificItems(
          setIsLoading,
          paginationNumber,
          setListSource,
          RouterContants.FOODS
        );
        break;
      default:
        getListItems(setIsLoading, paginationNumber, setListSource);
    }
  }, [location.pathname]);

  const renderPagination = () => {
    if (currentList.length > 9) {
      return (
        <PaginationCotainer>
          <PaginationButton
            onClick={() => {
              removePagination();
              reorganizeItems(
                currentList,
                currentPagination - 1,
                setListSource
              );
            }}
            visible={currentPagination !== 0}
          >
            Previous
          </PaginationButton>
          <PaginationButton
            onClick={() => {
              addPagination();
              reorganizeItems(
                currentList,
                currentPagination + 1,
                setListSource
              );
            }}
            visible
          >
            Next
          </PaginationButton>
        </PaginationCotainer>
      );
    }

    return <div />;
  };

  if (isFavorites) {
    return (
      <ListWrapper>
        <ListContainer>
          {favorites
            .find((favorite) => favorite.userEmail === currentUser.email)
            ?.favorites.map((item) => (
              <CardList key={item.id} item={item} />
            ))}
        </ListContainer>
      </ListWrapper>
    );
  }

  if (isLoading) return <div />;

  return (
    <ListWrapper>
      <ListContainer>
        {listSource.map((item) => (
          <CardList key={item.id} item={item} />
        ))}
      </ListContainer>
      {renderPagination()}
    </ListWrapper>
  );
};

export default List;
