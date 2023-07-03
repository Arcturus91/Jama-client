import React, { useEffect, useState } from "react";
import { getChefDetailWs, updateChefWs } from "../services/chef-ws";
import { useNavigate } from "react-router-dom";

const ChefUpdate: React.FC<AuthenticationProps> = ({ user }) => {
  const { id } = user as Chef;
  const [chef, setChef] = useState<Chef | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChefData = async () => {
      try {
        const response = await getChefDetailWs(id as string);
        console.log("chef loading detail", response);
        if (response.status && "data" in response) {
          setChef(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchChefData();
  }, [id]);

  const [formData, setFormData] = useState({
    profileImageUrl: chef?.profileImageUrl,
    phoneNumber: chef?.phoneNumber,
    bio: chef?.bio,
    address: chef?.address,
    name:chef?.name
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
      console.log("before sending update chef data", formData);
      const response = await updateChefWs(id, formData);
      console.log("chefUpdate", response);
      if (response.status) {
        navigate(`/chefpage/${id}`);
      } else {
        setErrorMessage(response.errorMessage || "Error updating chef profile");
      }
    } catch (error) {
      console.log("Error in updateChefWs:", error);
      setErrorMessage(
        "An unexpected error occurred while updating the chef profile."
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
          Actualiza tu perfil
        </h1>
        <div>
          <label
            htmlFor="profileImageUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Link web de la foto del platillo
          </label>
          <input
            id="profileImageUrl"
            name="profileImageUrl"
            type="text"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.profileImageUrl as string}
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.phoneNumber as string}
          />
        </div>
        <div>
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700"
          >
            Bio
          </label>
          <input
            id="bio"
            name="bio"
            type="text"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.bio as string}
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.address}
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
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
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update
        </button>
        {<div className="text-red-500">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default ChefUpdate;
