import { useState } from "react";
import { Navbar } from "./components";
import routes from "./config/routes";
import { Routes, Route, useNavigate } from "react-router-dom";
import { logoutWs } from "./services/auth-ws";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();
  function authentication(user: User) {
    console.log("auth function", user);
    setUser(user);
  }

  async function handleLogout() {
    console.log("logged out");
    const res = await logoutWs();
    const { data, status, errorMessage } = res;

    if (status) {
      navigate("/");
      setUser(null);
    } else {
      alert(errorMessage);
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
    </div>
  );
};

export default App;
