import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Type from "./pages/Type";
import React from "react";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/type" element={<Type />} />
      </Routes>
    </>
  );
};

export default App;
