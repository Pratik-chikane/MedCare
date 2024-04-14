import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/AuthService";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="sticky top-0 z-10 ">
      <nav className="p-3 flex bg-white justify-between items-center ">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <p className="pl-3 text-2xl font-semibold hover:text-violet-800">
            MedCare
          </p>
        </div>
        {localStorage.getItem("jwt") && (
          <button
            onClick={handleLogout}
            className="items-center border border-gray-400 px-6 py-2 rounded-3xl hover:border-gray-700 "
          >
            logout
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
