import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Type from "./pages/Type";
import MainPage from "./pages/MainPage";
import Browse from "./pages/Browse";
import React from "react";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/type" element={<Type />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </>
  );
};

export default App;
