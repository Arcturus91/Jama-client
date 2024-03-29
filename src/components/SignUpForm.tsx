import React, { useState } from "react";
import { signupWs } from "../services/auth-ws";
import { useNavigate } from "react-router-dom";

const SignUpForm: React.FC<AuthenticationProps> = ({ authentication }) => {
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
    type: "",
    address: "",
    phoneNumber: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await signupWs(formData);
    if (response.status && "data" in response) {
      authentication(response.data);
      console.log("signup", response);
      navigate("/");
    }
    if ("errorMessage" in response) {
      setErrorMessage(response.errorMessage);
    } else {
      setErrorMessage(null);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen color">
      <form
        className="space-y-4 border border-gray-300 bg-white p-6 rounded-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center mb-4">
          Regístrate para continuar
        </h1>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Correo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Tipo
          </label>
          <select
            id="type"
            name="type"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.type}
          >
            <option value="">Selecciona tu tipo de usuario</option>
            <option value="user">Cliente</option>
            <option value="chef">Chef</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Dirección
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
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Número de teléfono
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            className="mt-1 block w-full px-2 py-2 border border-gray-300 shadow-sm rounded-md text-gray-700"
            onChange={handleChange}
            value={formData.phoneNumber}
            maxLength={9}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Regístrate
        </button>
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default SignUpForm;
