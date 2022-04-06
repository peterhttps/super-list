import React from "react";
import CardList from "../CardList";
import { ListWrapper } from "./styles";

const items = [
  {
    id: "1",
    name: "peça",
    type: "cloth",
    image:
      "https://midias.agazeta.com.br/2021/04/01/mulher-mostrando-roupa-457903-article.jpg",
  },
  {
    id: "2",
    name: "peggça",
    type: "cloth",
    image:
      "https://midias.agazeta.com.br/2021/04/01/mulher-mostrando-roupa-457903-article.jpg",
  },
  {
    id: "3",
    name: "peçcca",
    type: "cloth",
    image:
      "https://midias.agazeta.com.br/2021/04/01/mulher-mostrando-roupa-457903-article.jpg",
  },
  {
    id: "4",
    name: "peaaça",
    type: "cloth",
    image:
      "https://midias.agazeta.com.br/2021/04/01/mulher-mostrando-roupa-457903-article.jpg",
  },
  {
    id: "5",
    name: "peçeea",
    type: "cloth",
    image:
      "https://midias.agazeta.com.br/2021/04/01/mulher-mostrando-roupa-457903-article.jpg",
  },
];

const List: React.FC = () => {
  return (
    <ListWrapper>
      {items.map((item) => (
        <CardList key={item.id} item={item} />
      ))}
    </ListWrapper>
  );
};

export default List;
