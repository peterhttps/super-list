import React, { useMemo } from "react";
import IItem from "interfaces/IItem";
import { useFavorites, userUsers } from "hooks";

import { addFavorite, removeFavorite } from "store/favorites/actions";
import { CardImage, CardTitle, CardWrapper, FavoriteButton } from "./styles";

interface IProps {
  item: IItem;
}

const CardList: React.FC<IProps> = ({ item }: IProps) => {
  const { isAuthenticated, currentUser } = userUsers();
  const { favorites } = useFavorites();

  const favoriteAlreadySaved = useMemo(() => {
    const currentFavorites = favorites.find(
      (favorite) => favorite.userEmail === currentUser.email
    );

    if (currentFavorites) {
      if (
        currentFavorites.favorites.find(
          (favorite) => favorite.name === item.name
        )
      ) {
        return true;
      }
      return false;
    }

    return false;
  }, [favorites]);

  const renderFavoriteSection = () => {
    if (isAuthenticated) {
      if (favoriteAlreadySaved) {
        return (
          <FavoriteButton
            onClick={() => removeFavorite(currentUser.email, item)}
            removeOption
          >
            Remover dos favoritos
          </FavoriteButton>
        );
      }

      return (
        <FavoriteButton onClick={() => addFavorite(currentUser.email, item)}>
          Adicionar aos favoritos
        </FavoriteButton>
      );
    }

    return <div />;
  };

  return (
    <CardWrapper>
      <CardImage src={item.image} alt={item.name} />
      <CardTitle>{item.name}</CardTitle>
      {renderFavoriteSection()}
    </CardWrapper>
  );
};

export default CardList;
