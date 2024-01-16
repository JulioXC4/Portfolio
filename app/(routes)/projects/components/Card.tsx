"use client";

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { FaBeer, FaReact, FaNodeJs, FaVuejs, FaAngular } from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiDjango,
  SiPostgresql,
} from "react-icons/si";

const getIconForTechnology = (technology: string) => {
  switch (technology) {
    case "React":
      return <FaReact />;
    case "Angular":
      return <FaAngular />;
    case "Express":
      return <SiExpress />;
    case "Vue.js":
      return <FaVuejs />;
    case "Redux":
      return <SiRedux />;
    case "Firebase":
      return <SiFirebase />;
    case "MongoDB":
      return <SiMongodb />;
    case "Django":
      return <SiDjango />;
    case "PostgreSQL":
      return <SiPostgresql />;
    case "Node.js":
      return <FaNodeJs />;
    default:
      return <FaBeer />;
  }
};

const Card = ({
  image,
  name,
  description,
  technologies,
}: {
  image: StaticImageData;
  name: string;
  description: string;
  technologies: string[];
}) => {
  return (
    <div className="max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl my-4 shadow-lg">
      <div className="md:flex">
        <div className="md:w-1/3 w-1/3">
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            quality={90}
            priority
            placeholder="blur"
            className="object-cover w-full h-full rounded-l-md"
          />
        </div>
        <div className="p-8 md:w-2/3 bg-gray-400">
          <div className="flex items-center">
            {technologies.map((tech, index) => (
              <span key={index} className="mr-2">
                {getIconForTechnology(tech)}
              </span>
            ))}
          </div>
          <h2 className="text-lg font-semibold mt-2">{name}</h2>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
