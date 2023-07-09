import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMealDetailWs, updateMealWs } from "../services/meals-ws";

const MealUpdate: React.FC<AuthenticationProps> = ({ user }) => {
/*   const { id } = user as Chef; */
  const [meal, setMeal] = useState<Meal | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchMealData = async () => {
      try {
        const response = await getMealDetailWs(id as string);
        console.log("meal loading detail", response);
        if (response.status && "data" in response) {
          setMeal(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchMealData();
  }, [id]);

  const [formData, setFormData] = useState({
    imageUrl: meal?.imageUrl,
    name: meal?.name,
    description: meal?.description,
    price: meal?.price,
    availableAmount: meal?.availableAmount,
    isAvailable: meal?.isAvailable,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      console.log("before sending update meal data", formData);
      const response = await updateMealWs(id as string, formData);
      console.log("MealUpdate", response);
      if (response.status) {
        navigate(`/chefpage/${user?.id}`);
      } else {
        setErrorMessage(response.errorMessage || "Error actualizando el platillo");
      }
    } catch (error) {
      console.log("Error in updateMealWs:", error);
      setErrorMessage(
        "Un error inesperado ocurrió actualizando el platillo"
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen color">
      <form
        className="space-y-4 border border-gray-300 bg-white p-6 rounded-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center mb-4">
          Actualiza el platillo
        </h1>
        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Link web de la foto del platillo
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.imageUrl as string}
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre del platillo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.name as string}
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Descripción
          </label>
          <input
            id="description"
            name="description"
            type="text"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.description as string}
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Precio
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
        <div>
          <label
            htmlFor="availableAmount"
            className="block text-sm font-medium text-gray-700"
          >
            Cantidad Disponible
          </label>
          <input
            id="availableAmount"
            name="availableAmount"
            type="number"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.availableAmount as number}
          />
        </div>

        <div className="flex items-center">
          <input
            id="isAvailable"
            name="isAvailable"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            onChange={handleChange}
            checked={formData.isAvailable}
          />
          <label
            htmlFor="isAvailable"
            className="ml-2 block text-sm font-medium text-gray-700"
          >
            Disponible
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Actualizar
        </button>
        {<div className="text-red-500">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default MealUpdate;
