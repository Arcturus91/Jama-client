import React, { useEffect, useState } from "react";
import axios from "axios";
import { getChefDetailWs, updateChefWs } from "../services/chef-ws";
import { redirect, useNavigate } from "react-router-dom";

/* interface ChefUpdateProps {
  id: string;
  email: string;
  profileImageUrl: string | null;
  phoneNumber: string | null;
  bio: string | null;
  address: string;
} */

const ChefUpdate: React.FC</* ChefUpdateProps */ any> = (props) => {
  const id = props.user.id;
  const [chef, setChef] = useState<Chef | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChefData = async () => {
      try {
        const response = await getChefDetailWs(id as string);
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
  });

  const [errorMessage, setErrorMessage] = useState(null);

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

      if (response.status) {
        navigate(`/chefpage/${id}`);

        setErrorMessage(null);
      }

      //redirect to chef page
    } catch (error) {
      setErrorMessage("Error updating chef profile");
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
            Profile Image URL
          </label>
          <input
            id="profileImageUrl"
            name="profileImageUrl"
            type="text"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.profileImageUrl}
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
            value={formData.phoneNumber}
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
            value={formData.bio}
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
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update
        </button>
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default ChefUpdate;
