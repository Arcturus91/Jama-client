import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  user: User;
  handleLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  console.log("navbar props", props);
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Inicio 🏠
                </Link>
                <Link
                  to="/availablemeals"
                  className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Tu Jama 🍗
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contacto 👋
                </Link>
                <Link
                  to="/nosotros"
                  className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Nosotros 🇵🇪
                </Link>
              </div>
            </div>
          </div>
          {!props.user ? (
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Link
                  to="/signup"
                  className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Signup
                </Link>
                <Link
                  to="/login"
                  className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              </div>
            </div>
          ) : (
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Link
                  to="/"
                  onClick={() => {
                    props.handleLogout();
                  }}
                  className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
