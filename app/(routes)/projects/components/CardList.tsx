"use client";

import React from "react";
import Card from "./Card";

import kuskana from "@/public/images/projects/kuskana.png";
import karma from "@/public/images/projects/karma.png";
import rym from "@/public/images/projects/rym.jpg";
import yape from "@/public/images/projects/yape.png";

const CardList = () => {
  const projectsData = [
    {
      id: 1,
      image: kuskana,
      name: "Kuskana",
      description: "Descripción del Proyecto 1.",
      technologies: ["React", "Node.js", "Express"],
    },
    {
      id: 2,
      image: karma,
      name: "Karma E-Commerce",
      description: "Descripción del Proyecto 2.",
      technologies: ["Vue.js", "Firebase"],
    },
    {
      id: 3,
      image: rym,
      name: "Rick & Morty APP",
      description: "Descripción del Proyecto 3.",
      technologies: ["Angular", "MongoDB"],
    },
    {
      id: 4,
      image: yape,
      name: "Yape App",
      description: "Descripción del Proyecto 4.",
      technologies: ["Django", "PostgreSQL"],
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projectsData.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </div>
  );
};

export default CardList;
