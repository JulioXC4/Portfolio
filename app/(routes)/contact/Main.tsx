import React from "react";

const Main = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <p className="text-lg font-semibold mb-4">
        ¿Quieres ponerte en contacto conmigo? ¡Estoy aquí para ayudar!
      </p>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default Main;
