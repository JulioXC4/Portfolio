import React from 'react'
import CardList from './components/CardList'

import projectsData from '@/db/projects/projects.data'

function Project() {
  return (
    <div>
        <CardList projects={projectsData}/>
    </div>
  )
}

export default Project