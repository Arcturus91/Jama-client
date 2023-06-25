import React, { useState, useEffect } from "react";
import { getAvailableMealsWs } from "../services/meals-ws";
import { ChefsList, HomeLandingTop, MealsList } from "../components";
import { getAllChefsWs } from "../services/chef-ws";

const MealsPage: React.FC<AuthenticationProps> = (props) => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [chefs, setChefs] = useState<Chef[]>([]);
  const { user } = props;

  useEffect(() => {
    const fetchMeals = async () => {
      return await getAvailableMealsWs();
    };

    const fetchMealsData = async () => {
      const response = await fetchMeals();
      console.log("meal page", response);

      if (response.status && "data" in response) {
        setMeals(response.data as Meal[]);
      }
    };

    fetchMealsData();
  }, []);

  useEffect(() => {
    const fetchChefs = async () => {
      return await getAllChefsWs();
    };

    const fetchChefsData = async () => {
      const response = await fetchChefs();
      console.log("meals page, chef section", response);

      if (response.status && "data" in response) {
        setChefs(response.data as Chef[]);
      }
    };

    fetchChefsData();
  }, []);

  return (
    <div className="bg-white">
      <HomeLandingTop />
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold mb-4">Nuestros platos disponibles</h2>
        <MealsList meals={meals} user={user} />
      </div>

      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold mb-4">Nuestros chefs expertos</h2>
        <ChefsList chefs={chefs} user={user} />
      </div>
    </div>
  );
};

export default MealsPage;
