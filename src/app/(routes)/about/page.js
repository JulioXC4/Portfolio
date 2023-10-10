import React from 'react';

function About() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-blue-800 p-4 rounded-md shadow-md text-white min-h-screen">
      <div className="h-1/2">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Acerca de mí</h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-4">
            <p className="text-gray-200">
              ¡Hola! Soy Julio Castro, un desarrollador full stack web apasionado por crear aplicaciones web innovadoras y funcionales. Tengo experiencia en una variedad de tecnologías y disfruto resolviendo problemas y aprendiendo nuevas habilidades. Mi objetivo es crear soluciones de alta calidad y proporcionar una excelente experiencia de usuario. Cuando no estoy programando, me encanta explorar nuevas tecnologías, aprender idiomas y disfrutar del aire libre.
            </p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img
              src="/images/full-stack-development.jpg" // Ruta de la imagen relacionada al desarrollo web full stack
              alt="Desarrollo Web Full Stack"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About