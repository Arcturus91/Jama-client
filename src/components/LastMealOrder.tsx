import React from "react";

interface LastMealOrderProps {
  order: Order;
}

const LastMealOrder: React.FC<LastMealOrderProps> = ({ order }) => {
  console.log('last meal',order)
  return (

   order && (<div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Order Details</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Meal Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Order Status
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Total Price
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap">
              {order.meal.name}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              {order.orderStatus}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              {order.totalPrice}
            </td>
          </tr>
        </tbody>
      </table>
    </div>)


  );
};

export default LastMealOrder;
