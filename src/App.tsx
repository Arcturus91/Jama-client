import { useState } from "react";
import { Footer, Navbar } from "./components";
import routes from "./config/routes";
import { Routes, Route, useNavigate } from "react-router-dom";
import { logoutWs } from "./services/auth-ws";

const App = () => {
  const [user, setUser] = useState<User | Chef | null>(null);

  const navigate = useNavigate();
  function authentication(user: Partial<User | Chef> | null) {
    setUser(user as User | Chef | null);
  }

  async function handleLogout() {
    console.log("logged out");
    const res = await logoutWs();

    if (res.status) {
      console.log(res);
      navigate("/");
      setUser(null);
    } else {
      alert(res.errorMessage);
    }
  }

  return (
    <div>
      <Navbar user={user} handleLogout={handleLogout} />

      <Routes>
        {routes({ user, authentication }).map((item) => (
          <Route key={item.path} {...item} />
        ))}
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
