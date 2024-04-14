import "./App.css";
import CreatePatientForm from "./components/CreatePatientForm";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import PatientPage from "./components/PatientPage";
import RegisterForm from "./components/RegisterForm";
import UpdatePatientForm from "./components/UpdatePatientForm";
import ViewPatients from "./components/ViewPatients";
import { Route, Routes, Navigate } from "react-router-dom";

//Routing for all components

function App() {
  const hasToken = () => {
    const token = localStorage.getItem("jwt");
    return token !== null;
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />

          <Route path="/" element={<HomePage />} />
          <Route
            path="/patient/create"
            element={
              hasToken() ? (
                <CreatePatientForm />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/patients"
            element={
              hasToken() ? <ViewPatients /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/patient/:id"
            element={
              hasToken() ? <PatientPage /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/patient/update/:id"
            element={
              hasToken() ? (
                <UpdatePatientForm />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
