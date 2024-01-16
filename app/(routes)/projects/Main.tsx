"use client";

import React from "react";
import CardList from "./components/CardList";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <div className="">
        <h1>Mis proyectos: </h1>
      </div>
      <CardList />
    </div>
  );
};

export default Main;
