import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import ItemDetailPage from "./pages/ItemDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/ItemDetailPage" element={<ItemDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
