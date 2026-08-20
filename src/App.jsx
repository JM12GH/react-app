import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react"
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
 const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
                <Route path="/home" element={<Home/>} />
                </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App
