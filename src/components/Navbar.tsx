import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC<NavbarProps> = (props) => {
  const { user } = props;
  console.log(user);
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
          {!user ? (
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
                <span className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                  Bienvenido {user.type}: {user.email}
                </span>
                {user.type === "user" && (
                  <Link
                    to={`/userpage/${user.id}`}
                    className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    User Page 😎
                  </Link>
                )}
                {user.type === "chef" && (
                  <Link
                    to={`/chefpage/${user.id}`}
                    className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Chef Page 👨‍🍳
                  </Link>
                )}
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
