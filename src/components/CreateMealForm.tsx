import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMealWs } from "../services/meals-ws";

const CreateMealForm: React.FC<AuthenticationProps> = ({ user }) => {
  const { id } = user as Chef;
  const [formData, setFormData] = useState<Partial<Meal>>({
    name: "",
    price: 0,
    availableAmount: 0,
    imageUrl: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
//Todo: add validation so the chef cannot create a meal without adding imageUrl
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await createMealWs(formData);
      console.log("response in create meal", response);

      if (response.status) {
        navigate(`/chefpage/${id}`);
        setErrorMessage(null);
      } else {
        setErrorMessage(response.errorMessage || "Unknown error occurred");
      }
    } catch (error) {
      console.log("Error in createMealWs:", error);
      setErrorMessage("An error occurred while creating the meal.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        className="space-y-4 border border-gray-300 bg-white p-6 rounded-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center mb-4">
          Please create a new meal
        </h1>
        {/* Name field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        {/* Price field */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.price}
          />
        </div>
        {/* Available amount field */}
        <div>
          <label
            htmlFor="availableAmount"
            className="block text-sm font-medium text-gray-700"
          >
            Available Amount
          </label>
          <input
            id="availableAmount"
            name="availableAmount"
            type="number"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.availableAmount}
          />
        </div>
        {/* Image URL field */}
        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.imageUrl}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Meal
        </button>
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default CreateMealForm;
