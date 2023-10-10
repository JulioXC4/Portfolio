import React from 'react'
import CardList from './components/CardList'
import sampleProjects from './components/data'

function Project() {
  return (
    <div>
        <h1>
            Lista de proyectos: 
        </h1>
        <CardList projects={sampleProjects}/>
    </div>
  )
}

export default Project