import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-500 p-6">
      <div className="text-white text-lg">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/users" className="mr-4">
          Users
        </Link>
        <Link to="/chefs" className="mr-4">
          Chefs
        </Link>
        <Link to="/meals">Meals</Link>
      </div>
    </nav>
  );
};

export default Navbar;
