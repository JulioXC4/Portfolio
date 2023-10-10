'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

function Navbar() {
    const router = useRouter()

    const navigateTo = (path) => {
        router.push(path)
      }
    
      return (
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-white cursor-pointer" onClick={() => navigateTo('/')}>
              Mi Portafolio
            </h1>
            <ul className="flex space-x-4">
              <li>
                <span
                  className={`${
                    router.pathname === '/' ? 'text-blue-500' : 'text-white'
                  } hover:text-blue-500 cursor-pointer`}
                  onClick={() => navigateTo('/')}
                >
                  Inicio
                </span>
              </li>
              <li>
                <span
                  className={`${
                    router.pathname === '/about' ? 'text-blue-500' : 'text-white'
                  } hover:text-blue-500 cursor-pointer`}
                  onClick={() => navigateTo('/about')}
                >
                  Acerca de mí
                </span>
              </li>
              <li>
                <span
                  className={`${
                    router.pathname === '/projects' ? 'text-blue-500' : 'text-white'
                  } hover:text-blue-500 cursor-pointer`}
                  onClick={() => navigateTo('/projects')}
                >
                  Proyectos
                </span>
              </li>
              <li>
                <span
                  className={`${
                    router.pathname === '/technologies' ? 'text-blue-500' : 'text-white'
                  } hover:text-blue-500 cursor-pointer`}
                  onClick={() => navigateTo('/technologies')}
                >
                  Tecnologías
                </span>
              </li>
            </ul>
          </div>
        </nav>
      )
}

export default Navbar