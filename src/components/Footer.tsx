import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="p-4 bg-gray-800 text-white flex flex-col items-center justify-center space-y-4 ">
    <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
      <a
        href="https://instagram.com/yourhandle"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://facebook.com/yourhandle"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF size={24} />
      </a>
      <a href="mailto:youremail@example.com">
        <FaEnvelope size={24} />
      </a>
    </div>
    <div className="text-center">
      &copy; {new Date().getFullYear()} Jama - Todos los derechos reservados. Servicio exclusivo para Perú.
    </div>
  </footer>
);

export default Footer;
