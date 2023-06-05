import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getMealDetailWs } from "../services/meals-ws";

const MealDetail: React.FC<MealDetailProps> = ({ id }) => {
  const [mealDetail, setmMalDetail] = useState<MealDetail | null>(null);

  useEffect(() => {
    const fetchMealDetail = async () => {
      const response = await getMealDetailWs(id);
      if (response.status && "data" in response) {
        setmMalDetail(response.data as MealDetail);
      }
    };

    fetchMealDetail();
  }, [id]);

  const handleOrderClick = () => {
    // Redirect to the order form component
    // Implement the redirection logic according to your application's routing setup
  };

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
        <p className="text-gray-700 mb-2">Chef: {mealDetail.chef.name}</p>
        <p className="text-gray-700 mb-2">Address: {mealDetail.chef.address}</p>
        <button
          onClick={handleOrderClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default MealDetail;
