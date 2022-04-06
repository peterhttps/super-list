import React, { useState, useEffect } from "react";
import { useList } from "hooks";

import CardList from "../CardList";
import { ListWrapper } from "./styles";
import { getListItems } from "./helper";

interface IProps {
  isFavorites: boolean;
}

const List: React.FC<IProps> = ({ isFavorites = false }: IProps) => {
  const { currentList } = useList();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getListItems(setIsLoading);
  }, []);

  if (isFavorites) return <div />;

  if (isLoading) return <div />;

  return (
    <ListWrapper>
      {currentList.map((item) => (
        <CardList key={item.id} item={item} />
      ))}
    </ListWrapper>
  );
};

export default List;
