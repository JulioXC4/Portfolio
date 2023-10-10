import React from 'react'

function Card({ project }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-4">
              <a
                href={project.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>
      )
}

export default Card