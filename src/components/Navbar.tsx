import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC<NavbarProps> = (props) => {
  const { user } = props;
  const [open, setOpen] = useState(false);

  console.log(user);
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)}>
                {open ? <FaTimes /> : <FaBars />}
              </button>
            </div>
            <div
              className={`ml-10 flex items-baseline space-x-4 ${
                open ? "block" : "hidden"
              } md:block`}
            >
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
          {!user ? (
             <div className={`ml-4 flex items-center md:ml-6 ${open ? 'block' : 'hidden'} md:block`}>
                <Link
                  to="/signup"
                  className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Crea tu cuenta
                </Link>
                <Link
                  to="/login"
                  className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Ingresa
                </Link>
            </div>
          ) : (
<div className={`ml-4 flex items-center md:ml-6 ${open ? 'block' : 'hidden'} md:block`}>
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
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
