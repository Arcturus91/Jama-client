import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetailWs, updateUserWs } from "../services/user-ws";

const UserUpdate: React.FC<AuthenticationProps> = ({ user }) => {
  const { id } = user as User;
  const [client, setClient] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserDetailWs(id as string);
        console.log("user detail", response);
        if (response.status && "data" in response) {
          setClient(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserData();
  }, [id]);

  const [formData, setFormData] = useState({
    profileImageUrl: client?.profileImageUrl,
    phoneNumber: client?.phoneNumber,
    address: client?.address,
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
      console.log("before sending update user data", formData);
      const response = await updateUserWs(id, formData);
      console.log("UserUpdate", response);
      if (response.status) {
        navigate(`/userpage/${id}`);
      } else {
        setErrorMessage(response.errorMessage || "Error updating user profile");
      }
    } catch (error) {
      console.log("Error in updateUserWs:", error);
      setErrorMessage(
        "An unexpected error occurred while updating the User profile."
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
            Link web de la imagen de perfil
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
            maxLength={9}
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
            value={formData.address as string }
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Actualizar
        </button>
        {<div className="text-red-500">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default UserUpdate;
