import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
<div className="min-h-screen flex items-center justify-center">
      <div className="relative ">
        <div
          className="absolute inset-0 bg-black"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dad5dandd/image/upload/v1687709894/JAMAPP/collageComidaPeruana_cx5kwv.jpg")',
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.6)',
            zIndex: -1,
          }}
        />
        <div className="p-8 md:m-96 bg-black bg-opacity-50 text-white text-center relative">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">404 - Página no encontrada</h1>
          <p className="text-lg sm:text-xl">La ruta solicitada no existe.</p>
          <Link to={"/"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Inicio
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default NotFoundPage;
