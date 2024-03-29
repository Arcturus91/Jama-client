import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MealsList } from "../components";
import { getChefDetailWs } from "../services/chef-ws";

const ChefPage: React.FC<AuthenticationProps> = (props) => {
  const { user } = props;
  console.log("i am user from chef page", user?.type);
  const { id } = useParams<{ id: string }>();
  console.log("chef page", props);
  const [chef, setChef] = useState<Chef | null>(null);

  useEffect(() => {
    const fetchChefData = async () => {
      try {
        const response = await getChefDetailWs(id as string);
        console.log("response in chef page", response);
        if (response.status && "data" in response) {
          setChef(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchChefData();
  }, [id]);

  if (!id) {
    return <div>Meal not found</div>;
  }
  if (!chef) return <div>Loading...</div>;

  return (
    <div className="mx-auto container px-4 sm:px-8 max-w-screen-xl">
      <div className="py-8">
        <div className="flex flex-col">
          <div className="px-4 mb-4">
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full h-64 object-cover"
                src={
                  chef.profileImageUrl ||
                  "https://res.cloudinary.com/dad5dandd/image/upload/v1686029872/JAMAPP/Screenshot_2023-06-06_at_00.37.09_whzsy6.png"
                }
                alt="chef"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{chef.name}</div>
                <p className="text-gray-700 text-base">
                  Bio: {chef.bio || "No bio available"}
                </p>
              </div>
              <div className="px-6 pb-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Rating: {chef.rating || 0}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Total Ratings: {chef.totalRatings || 0}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Phone: {chef.phoneNumber || "No phone number"}
                </span>
                {user?.id === id && (
                  <>
                    <Link
                      to="/chef/updateprofile"
                      className="mt-2 mx-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Actualiza tu perfil
                    </Link>
                    <Link
                      to="/chef/createmeal"
                      className="mt-2 mx-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Registra un platillo
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="px-4">
            <h2 className="font-bold text-2xl mb-4">Meals</h2>
            <MealsList meals={chef.meals} user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefPage;
