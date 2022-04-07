import React from "react";
import { userUsers } from "hooks";
import { useLocation, useNavigate } from "react-router-dom";
import List from "components/List";
import RouterContants from "constants/routerContants";
import { getRawFromStorage } from "../../utils/storage";

import {
  CategorieContainer,
  CategoriesContainer,
  FullListWrapper,
} from "./styles";

interface IProps {
  isFavorites?: boolean;
}

const FullList: React.FC<IProps> = ({ isFavorites = false }: IProps) => {
  const { isAuthenticated, currentUser } = userUsers();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <FullListWrapper>
      <CategoriesContainer>
        {isAuthenticated && (
          <>
            <h1>Hello, {currentUser.name.split(" ")[0]}</h1>
            <CategorieContainer
              onClick={() => {
                localStorage.setItem("@actualPath", RouterContants.FAVORITES);
                navigate(RouterContants.FAVORITES);
              }}
              active={[
                location.pathname,
                getRawFromStorage("@actualPath"),
              ].includes(RouterContants.FAVORITES)}
            >
              Favorites
            </CategorieContainer>
          </>
        )}
        <h1>Categories</h1>
        <CategorieContainer
          onClick={() => {
            navigate(RouterContants.ALL);
            localStorage.removeItem("@actualPath");
          }}
          active={[
            location.pathname,
            getRawFromStorage("@actualPath"),
          ].includes(RouterContants.ALL)}
        >
          All
        </CategorieContainer>
        <CategorieContainer
          onClick={() => {
            navigate(RouterContants.CARS);
            localStorage.removeItem("@actualPath");
          }}
          active={[
            location.pathname,
            getRawFromStorage("@actualPath"),
          ].includes(RouterContants.CARS)}
        >
          Cars
        </CategorieContainer>
        <CategorieContainer
          onClick={() => {
            navigate(RouterContants.CLOTHES);
            localStorage.removeItem("@actualPath");
          }}
          active={[
            location.pathname,
            getRawFromStorage("@actualPath"),
          ].includes(RouterContants.CLOTHES)}
        >
          Clothes
        </CategorieContainer>
        <CategorieContainer
          onClick={() => {
            navigate(RouterContants.FOODS);
            localStorage.removeItem("@actualPath");
          }}
          active={[
            location.pathname,
            getRawFromStorage("@actualPath"),
          ].includes(RouterContants.FOODS)}
        >
          Foods
        </CategorieContainer>
      </CategoriesContainer>
      <List isFavorites={isFavorites} />
    </FullListWrapper>
  );
};

export default FullList;
