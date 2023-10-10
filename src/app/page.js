import React from 'react'

function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">¡Hola, soy Julio Castro!</h1>
      <p className="text-lg md:text-xl mb-8">Desarrollador Full Stack Web</p>
      <a
        href="/projects" // Reemplaza con la URL correcta de tu página de proyectos
        className="bg-white text-blue-500 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-full text-lg md:text-xl font-semibold transition duration-300 ease-in-out"
      >
        Ver mis proyectos
      </a>
    </div>
  )
}

export default Home;
