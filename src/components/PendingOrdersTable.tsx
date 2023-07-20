import React, { useState } from "react";
import { updateOrderStatusWs } from "../services/order-ws";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

interface TableProps {
  pendingOrders: Order[];
}

const PendingOrdersTable: React.FC<TableProps> = ({ pendingOrders }) => {

  const [isExpanded, setIsExpanded] = useState(true);
  const [orderStatus, setOrderStatus] = useState<{
    [key: string]: Order["orderStatus"];
  }>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

const navigate = useNavigate();

  const idTrimmer = (id: string): string => {
    const newId = id.slice(0, 5) + "...";
    return newId;
  };

  const handleOrderStatusChange =
    (orderId: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      setOrderStatus({
        ...orderStatus,
        [orderId]: e.target.value as Order["orderStatus"],
      });
    };

  const updateOrderStatus = async (orderId: string) => {
    if (!orderStatus[orderId]) return;

    setIsLoading(true);
      const response = await updateOrderStatusWs(orderId, {
        orderStatus: orderStatus[orderId],
      });

      setIsLoading(false);

      if (response.status && "data" in response) {
        setOrderStatus({
          ...orderStatus,
          [orderId]: response.data.orderStatus,
        });
        navigate('/')
      }
      if ("errorMessage" in response) {
        setErrorMessage(response.errorMessage);
      } else {
        setErrorMessage(null);
      }
  };

  return (
    <div>
      <button
        className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Oculta las órdenes" : "Muestra las órdenes"}
      </button>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      {isLoading && <Spinner />}
      {isExpanded && (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #ID Orden
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Precio total
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Platillo
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID de Cliente
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Teléfono de cliente
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cambiar Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pendingOrders.map((order, orderIndex) => (
              <tr
                key={order.id}
                className={orderIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                  {idTrimmer(order.id)}
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.totalPrice}
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.meal.name}
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                  {idTrimmer(order.user.id)}
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.user.phoneNumber}
                </td>
                <td className="flex flex-col px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                  <select
                    id="orderStatus"
                    name="orderStatus"
                    className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
                    onChange={handleOrderStatusChange(order.id)}
                    value={orderStatus[order.id] || order.orderStatus}
                  >
                    <option value="requested">Pedido</option>
                    <option value="onCooking">En cocina</option>
                    <option value="onDelivery">Para entrega</option>
                    <option value="completed">Completada</option>
                  </select>
                  {orderStatus[order.id] &&
                    orderStatus[order.id] !== order.orderStatus && (
                      <button
                        className="my-1 py-1 px-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => updateOrderStatus(order.id)}
                      >
                        Notificar
                      </button>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PendingOrdersTable;
