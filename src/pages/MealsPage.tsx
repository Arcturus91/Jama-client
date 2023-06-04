import React, { useState, useEffect } from "react";
import { getAvailableMealsWs } from "../services/meals-ws";

const Meals: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

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
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {meals
            .filter((meal) => meal.isAvailable)
            .map((meal) => (
              <div key={meal.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={meal.imageUrl}
                    alt={meal.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{meal.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${meal.price.toFixed(2)}
                </p>
                <p className="text-gray-700">
                  Available amount: {meal.availableAmount}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Meals;
