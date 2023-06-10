import React, { useState, useEffect } from "react";
import { getAvailableMealsWs } from "../services/meals-ws";
import { Link } from "react-router-dom";
import { MealsList } from "../components";

const MealsPage: React.FC<AuthenticationProps> = (props) => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const { user } = props;

  useEffect(() => {
    const fetchMeals = async () => {
      return await getAvailableMealsWs();
    };

    const fetchData = async () => {
      const response = await fetchMeals();
      console.log(response);

      if (response.status && "data" in response) {
        setMeals(response.data as Meal[]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold mb-4">Nuestros platos disponibles</h2>
        <MealsList meals={meals} user={user} />
      </div>
    </div>
  );
};

export default MealsPage;
