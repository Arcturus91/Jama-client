import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPendingOrdersWs } from "../../services/order-ws";
import { PendingOrdersTable } from "../../components";

const AdminPage: React.FC<AuthenticationProps> = (props) => {
  console.log("yo soy user entering to admin page", props);
  const { user } = props;
  const [pendingOrders, setPendingOrders] = useState<Order[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.type !== "admin") {
      navigate("/");
    }

    const fetchPendingOrdersData = async () => {
      try {
        const response = await getAllPendingOrdersWs();
        console.log("response all pending orders", response);
        if (response.status && "data" in response) {
          setPendingOrders(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchPendingOrdersData();
  }, [navigate, user?.type]);

  return (
    <div className="m-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Bienvenido, Admin!</h1>
        <div className="flex items-center mt-4">
          <img 
            className="w-10 h-10 rounded-full mr-4" 
            src={user?.profileImageUrl || 'https://via.placeholder.com/150'} 
            alt="Admin profile"
          />
          <div>
            <div className="font-medium text-lg">{user?.email}</div>
            <div className="text-sm text-gray-500">{user?.phoneNumber || 'No phone number'}</div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Órdenes Pendientes de Entrega:</h2>
        <PendingOrdersTable pendingOrders={pendingOrders} />
      </div>
    </div>
  );
};

export default AdminPage;
