import { Link, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { useLogout } from "./logout";

const App = () => {
  const logout = useLogout();
  return (
    <div className="h-full text-xl">
      <ul className="flex gap-2 bg-sky-50">
        <li className="p-5">
          <Link to="/">Home</Link>
        </li>
        <li className="p-5">
          <Link to="/register">Register</Link>
        </li>
        <li className="p-5">
          <Link to="/login">Log in</Link>
        </li>
        <li className="p-5">
          <button onClick={logout} className="cursor-pointer">
            Log out
          </button>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
