import React, { useState, useEffect } from "react";

interface Meal {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const Meals: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    fetch("http://localhost:5005/api/availablemeals", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setMeals(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Meals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <div key={meal.id} className="border rounded-lg overflow-hidden">
            <img
              src={meal.imageUrl}
              alt={meal.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{meal.name}</h2>
              <p>{meal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
