import React from 'react'
import Card from './Card'

function CardList({ projects }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      )
}

export default CardList