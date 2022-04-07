import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullList from "./components/FullList";
import Header from "./components/Header/index";

const src: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FullList />} />
        <Route path="/cars" element={<FullList />} />
        <Route path="/foods" element={<FullList />} />
        <Route path="/clothes" element={<FullList />} />
        <Route path="/favorites" element={<FullList isFavorites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default src;
