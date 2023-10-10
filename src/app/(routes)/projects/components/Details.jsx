import React from 'react'

function Details({ project }) {
    return (
        <div>
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="object-cover mt-4"
          />
          <p className="text-gray-600 mt-4">{project.description}</p>
          <p className="mt-4">
            <strong>Tecnologías utilizadas:</strong> {project.technologies.join(', ')}
          </p>
          <p className="mt-4">
            <strong>Fecha de finalización:</strong> {project.date}
          </p>
          <p className="mt-4">
            <strong>Cliente:</strong> {project.client}
          </p>
        </div>
    )
}

export default Details