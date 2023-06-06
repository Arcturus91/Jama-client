import React from "react";
import { Link } from "react-router-dom";

interface MealsListProps {
  meals: Meal[];
  user?: User | null;
}

const MealsList: React.FC<MealsListProps> = (props) => {
  const { meals } = props;
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {meals
        .filter((meal) => meal.isAvailable)
        .map((meal) => (
          <div key={meal.id} className="group">
            <Link to={props.user ? `/availablemeals/${meal.id}` : "/login"}>
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
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MealsList;
