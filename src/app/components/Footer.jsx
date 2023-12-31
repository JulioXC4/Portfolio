import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} Mi Portafolio | Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
