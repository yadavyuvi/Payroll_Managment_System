import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import ManageSalary from "./components/ManageSalary";
import FetchEmployee from "./components/FetchEmployee";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN PAGE FIRST */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED PAGES */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<h2>Welcome Payroll System</h2>} />
                  <Route path="/add" element={<AddEmployee />} />
                  <Route path="/salary" element={<ManageSalary />} />
                  <Route path="/fetch" element={<FetchEmployee />} />
                </Routes>
              </>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;