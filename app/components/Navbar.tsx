"use client";

import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-400 p-4 w-full">
      <div className="flex justify-around items-center text-white font-bold text-2xl">
        <Link href="/projects">Proyectos</Link>
        <Link href="/about">Sobre Mi</Link>
        <Link href="/contact">Contacto</Link>
      </div>
    </nav>
  );
}

export default Navbar;
