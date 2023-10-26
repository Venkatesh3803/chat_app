import HomePage from "./pages/homepage/HomePage"
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const user = true;
  return (
    <div className="app">
      {user && <span className="logout">LogOut</span>}
      <Routes>
        <Route path="/" element={user ? <HomePage /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  )
}

export default App
