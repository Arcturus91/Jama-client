import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserDetailWs } from "../services/user-ws";
import { LastMealOrder } from "../components";

//TODO: change all reference in code to user as user to Client.
//! Add button for editing user profile
//! add button to add food review / chef review 

const UserPage: React.FC<AuthenticationProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [client, setClient] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserDetailWs(id as string);
        console.log("useState from client page", response);
        if (response.status && "data" in response) {
          setClient(response.data as User);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserData();
  }, [id]);

  if (!id) {
    return <div>Platillo no encontrado</div>;
  }
  if (!client) return <div>Cargando...</div>;

  console.log("client from user page", client);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tu Perfil</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center mb-6">
          {client.profileImageUrl ? (
            <img
              src={client.profileImageUrl}
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />
          ) : (
            <img
              src={
                "https://res.cloudinary.com/dad5dandd/image/upload/v1686409857/JAMAPP/Screenshot_2023-06-10_at_10.10.50_qkvwwv.png"
              }
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />
          )}
          <div>
            <h2 className="text-xl font-bold">{client.email}</h2>
            <p className="text-gray-600">
              {client.phoneNumber
                ? `Teléfono: ${client.phoneNumber}`
                : "Teléfono no disponible"}
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Tu dirección de envío:</h3>
          <p className="text-gray-600">
            {client.address || "Address not available"}
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Órdenes:</h3>
          {client.orders && client.orders?.length > 0 ? (
            <LastMealOrder order={client.orders[client.orders.length - 1]} />
          ) : (
            <p className="text-gray-600">
              Tu primera orden se verá registrada aquí
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
