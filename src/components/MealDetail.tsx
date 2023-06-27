import React, { useState, useEffect } from "react";
import { deleteMealWs, getMealDetailWs } from "../services/meals-ws";
import { createMealOrderWs } from "../services/user-ws";
import { useNavigate } from "react-router-dom";

const MealDetail: React.FC<MealDetailProps> = ({ id, user }) => {
  const [mealDetail, setMealDetail] = useState<Meal | null>(null);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  console.log("USER IN MEAL DETAIL", user);
  useEffect(() => {
    const fetchMealDetail = async () => {
      const response = await getMealDetailWs(id);
      console.log("meail detail", response);
      if (response.status && "data" in response) {
        setMealDetail(response.data as Meal);
      }
    };

    fetchMealDetail();
  }, [id]);

  const handleOrderClick = async () => {
    const mealOrder = { mealId: id, quantity: 1 };
    const response = await createMealOrderWs(mealOrder);
    if (response.status && "data" in response) {
      console.log("createMealOrderWs", response);
      navigate("/"); //!implement redirect to user page or to a page where there is feedback about purchase
    }
    if ("errorMessage" in response) {
      setErrorMessage(response.errorMessage);
    } else {
      setErrorMessage(null);
    }
  };

  const handleDeleteClick = async ()=>{
    const response = await deleteMealWs(id);
    if (response.status && "data" in response) {
      console.log("deleteMeal", response);
      navigate(`/chefpage/${user?.id}`);
    }
    if ("errorMessage" in response) {
      setErrorMessage(response.errorMessage);
    } else {
      setErrorMessage(null);
    }
  }
  const handleUpdateClick = async ()=>{
    console.log('you clicked update meal')
  }
  
  if (!mealDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Display the properties */}
      <img
        src={mealDetail.imageUrl}
        alt={mealDetail.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{mealDetail.name}</h2>
        <p className="text-gray-500 mb-4">{mealDetail.description}</p>
        <p className="text-gray-700 mb-2">Price: {mealDetail.price}</p>
        <p className="text-gray-700 mb-2">
          Available Amount: {mealDetail.availableAmount}
        </p>
        {mealDetail.chef?.email && (
          <p className="text-gray-700 mb-2">Chef: {mealDetail.chef.email}</p>
        )}
        {mealDetail.chef?.address && (
          <p className="text-gray-700 mb-2">
            Address: {mealDetail.chef.address}
          </p>
        )}
        {user?.type === "user" ? (
          <button
            onClick={handleOrderClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Place Order
          </button>
        ) : (
          <div className='flex flex-row'>
            <button
              onClick={handleDeleteClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4"
            >
              Elimina este platillo
            </button>
            <button
              onClick={handleUpdateClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4"
            >
              Actualiza el platillo
            </button>
          </div>
        )}
        {<div className="text-red-500">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default MealDetail;
