import { Navbar } from "./components";
import routes from "./config/routes";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {routes().map((item) => (
          <Route key={item.path} {...item} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
