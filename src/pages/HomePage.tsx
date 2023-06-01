import React from "react";
import { Link } from "react-router-dom";
import { SignUpForm } from "../components";

const Home: React.FC = () => {
  return (
    <div className="bg-blue-500 h-screen flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Food App</h1>
      <p className="text-xl mb-8">
        Discover the best meals prepared by top chefs!
      </p>
      <Link
        to="/meals"
        className="bg-white text-blue-500 px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-200"
      >
        Browse Meals
      </Link>
      <SignUpForm />
    </div>
  );
};

export default Home;
