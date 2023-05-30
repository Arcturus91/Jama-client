import React, { useState } from "react";

interface User {
  id: string;
  email: string;
  profileImageUrl: string | null;
  phoneNumber: string | null;
  createdAt: string;
  updatedAt: string;
  address: string;
  type: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = () => {
    fetch("http://localhost:5005/api/findusers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <button
        onClick={fetchUsers}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold mb-4"
      >
        Load Users
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border rounded-lg p-4">
            <h2 className="font-bold text-lg mb-2">{user.email}</h2>
            <p>Address: {user.address || "N/A"}</p>
            <p>Phone: {user.phoneNumber || "N/A"}</p>
            <p>Member since: {new Date(user.createdAt).toLocaleDateString()}</p>
            <img
              src={user.profileImageUrl || "default_image_url"}
              alt="Profile"
              className="w-24 h-24 mt-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
