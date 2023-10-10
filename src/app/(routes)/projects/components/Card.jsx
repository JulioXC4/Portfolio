'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Card({ project }) {
  const router = useRouter()

  const goToProject = () => {
    router.push(`/projects/${project.id}`)
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer sm:w-11/12 md:w-11/12 lg:w-11/12" onClick={goToProject}>
      <div className="relative">
        <Image
          src={project.imageUrl}
          alt={project.title}
          objectFit='contain'
          width={900}
          height={900}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-600">{project.description}</p>
        <div className="mt-4">
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              goToProject()
            }}
          >
            Ver más
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card