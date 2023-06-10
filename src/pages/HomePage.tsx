import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="bg-blue-500 h-screen flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a JAMAPP</h1>
      <p className="text-xl mb-8">
        Encuentra la mejor comida casera de Barranco
      </p>
      <Link
        to="/availablemeals"
        className="bg-white text-blue-500 px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-200"
      >
        Revisa nuestros platillos
      </Link>
    </div>
  );
};

export default Home;
