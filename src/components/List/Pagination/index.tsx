import { useList } from "hooks";
import IItem from "interfaces/IItem";
import React from "react";
import { useLocation } from "react-router-dom";
import { addPagination, removePagination } from "store/list/actions";
import { reorganizeItems } from "../helper";
import { PaginationButton, PaginationCotainer } from "../styles";

// import { Container } from './styles';

interface IProps {
  listSource: IItem[];
  currentPagination: number;
  setListSource: React.Dispatch<React.SetStateAction<IItem[]>>;
}

const Pagination: React.FC<IProps> = ({
  listSource,
  currentPagination,
  setListSource,
}: IProps) => {
  const { currentList } = useList();
  const location = useLocation();

  if (listSource.length > 9 && !location.pathname.startsWith("/search")) {
    return (
      <PaginationCotainer>
        <PaginationButton
          onClick={() => {
            removePagination();
            reorganizeItems(currentList, currentPagination - 1, setListSource);
          }}
          visible={currentPagination !== 0}
        >
          Previous
        </PaginationButton>
        <PaginationButton
          onClick={() => {
            addPagination();
            reorganizeItems(currentList, currentPagination + 1, setListSource);
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

export default Pagination;
