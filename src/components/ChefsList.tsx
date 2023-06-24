import React from "react";
import { Link } from "react-router-dom";

interface ChefsListProps {
  chefs: Chef[];
  user?: User | null;
}

const ChefsList: React.FC<ChefsListProps> = (props) => {
  const { chefs } = props;
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {chefs.map((chef) => (
        <div key={chef.id} className="group">
          <Link
            to={ `/chefpage/${chef.id}` }
            className="block"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={chef.profileImageUrl ||
                  "https://res.cloudinary.com/dad5dandd/image/upload/v1686029872/JAMAPP/Screenshot_2023-06-06_at_00.37.09_whzsy6.png"
                }
                alt={chef.email}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{chef.email}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {chef.bio}
            </p>
            <div className="mt-2 flex items-center">
              <svg
                className="h-4 w-4 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="ml-1 text-gray-600">
                {chef.rating.toFixed(1)} ({chef.totalRatings} reviews)
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ChefsList;
