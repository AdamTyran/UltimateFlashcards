import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";

const Main = () => {
  return (
    <div className="h-full flex flex-grow items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
