import HomePage from "./pages/homepage/HomePage"
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "./redux/AuthReducer";

function App() {
  const user = useSelector(state => state.user.user)
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={user ? <HomePage /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={user ? <HomePage /> : <Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  )
}

export default App
